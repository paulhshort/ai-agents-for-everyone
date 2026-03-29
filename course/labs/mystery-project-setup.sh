#!/usr/bin/env bash
# ============================================================================
# Mystery Project Setup Script
# ============================================================================
# Run this script BEFORE Lab 01 to create the mystery project folder that
# students will investigate with Codex CLI.
#
# Usage:
#   chmod +x mystery-project-setup.sh
#   ./mystery-project-setup.sh
#
# This creates ~/mystery-project/ with all files, the hidden bug, and the
# Easter egg. Copy or zip this folder for each student machine.
# ============================================================================

set -e

PROJECT_DIR="$HOME/mystery-project"

echo "=== Mystery Project Setup ==="
echo "Creating project at: $PROJECT_DIR"
echo ""

# Clean up any previous version
if [ -d "$PROJECT_DIR" ]; then
    echo "Removing existing mystery-project folder..."
    rm -rf "$PROJECT_DIR"
fi

mkdir -p "$PROJECT_DIR/images"

# --------------------------------------------------------------------------
# index.html -- THE BUG IS HERE: references "styles.css" instead of "style.css"
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/index.html" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Tracker 3000</title>
    <!-- BUG: This references "styles.css" but the file is "style.css" -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Pet Tracker 3000</h1>
        <p class="subtitle">Keep track of all your favorite pets!</p>
    </header>
    <main>
        <div id="pet-list" class="container">
            <h2>My Pets</h2>
            <div id="pets-container"></div>
            <button id="add-pet-btn" class="btn">Add a Pet</button>
        </div>
        <div id="stats" class="container">
            <h2>Pet Stats</h2>
            <p>Total pets: <span id="pet-count">0</span></p>
            <p>Most popular type: <span id="popular-type">-</span></p>
        </div>
    </main>
    <footer>
        <p>Built with love for animals everywhere.</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>
HTMLEOF

# --------------------------------------------------------------------------
# style.css -- Note: filename is "style.css" (no 's'), creating the bug
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/style.css" << 'CSSEOF'
/* Pet Tracker 3000 - Stylesheet */
/* Version 1.2 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    color: #2d3748;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 2rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}

main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.container {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container h2 {
    color: #667eea;
    margin-bottom: 1rem;
}

.btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

.btn:hover {
    background: #764ba2;
}

.pet-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pet-name {
    font-weight: bold;
    font-size: 1.1rem;
}

.pet-type {
    color: #718096;
    font-size: 0.9rem;
}

footer {
    text-align: center;
    padding: 2rem;
    color: #a0aec0;
    font-size: 0.9rem;
}
CSSEOF

# --------------------------------------------------------------------------
# app.js -- Contains the Easter egg in a comment
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/app.js" << 'JSEOF'
// Pet Tracker 3000 - Main Application Logic
// This file handles adding pets, displaying the list, and computing stats.

// EASTER EGG: If you found this, tell your instructor the secret word is "PINEAPPLE"

const pets = [];

function loadPetsFromData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.pets.forEach(pet => {
                pets.push(pet);
            });
            renderPets();
            updateStats();
        })
        .catch(err => {
            console.log('Could not load pet data:', err);
        });
}

function renderPets() {
    const container = document.getElementById('pets-container');
    container.innerHTML = '';
    pets.forEach((pet, index) => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
            <div>
                <span class="pet-name">${pet.name}</span>
                <span class="pet-type"> - ${pet.type}</span>
            </div>
            <span>${pet.age} years old</span>
        `;
        container.appendChild(card);
    });
}

function updateStats() {
    document.getElementById('pet-count').textContent = pets.length;

    if (pets.length > 0) {
        const typeCounts = {};
        pets.forEach(pet => {
            typeCounts[pet.type] = (typeCounts[pet.type] || 0) + 1;
        });
        const popular = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];
        document.getElementById('popular-type').textContent = popular[0];
    }
}

function addPet() {
    const name = prompt('Pet name:');
    if (!name) return;
    const type = prompt('Pet type (dog, cat, fish, etc.):');
    if (!type) return;
    const age = prompt('Pet age:');
    if (!age) return;

    pets.push({ name, type, age: parseInt(age) || 0 });
    renderPets();
    updateStats();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-pet-btn').addEventListener('click', addPet);
    loadPetsFromData();
});
JSEOF

# --------------------------------------------------------------------------
# data.json -- Sample pet data
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/data.json" << 'JSONEOF'
{
  "pets": [
    { "name": "Buddy", "type": "dog", "age": 5 },
    { "name": "Whiskers", "type": "cat", "age": 3 },
    { "name": "Goldie", "type": "fish", "age": 1 },
    { "name": "Rex", "type": "dog", "age": 7 },
    { "name": "Luna", "type": "cat", "age": 2 },
    { "name": "Shelly", "type": "turtle", "age": 12 },
    { "name": "Coco", "type": "parrot", "age": 8 }
  ]
}
JSONEOF

# --------------------------------------------------------------------------
# README.md -- Project documentation
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/README.md" << 'READMEEOF'
# Pet Tracker 3000

A simple web application to keep track of your pets!

## Features
- View a list of pets with their names, types, and ages
- Add new pets with the click of a button
- See stats about your pet collection

## How to Use
1. Open `index.html` in a web browser
2. Your pre-loaded pets will appear automatically
3. Click "Add a Pet" to add a new one

## Files
- `index.html` - Main page
- `style.css` - Styling
- `app.js` - Application logic
- `data.json` - Pet data
- `config.yaml` - Configuration
- `images/` - Image assets

## Built By
A mystery developer... can you figure out who?
READMEEOF

# --------------------------------------------------------------------------
# config.yaml -- Configuration file
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/config.yaml" << 'YAMLEOF'
# Pet Tracker 3000 Configuration
app:
  name: "Pet Tracker 3000"
  version: "1.2.0"
  author: "Mystery Dev"
  debug: false

display:
  max_pets_per_page: 20
  show_stats: true
  theme: "purple"
  animation: true

data:
  source: "data.json"
  auto_save: false
  backup_interval: 3600
YAMLEOF

# --------------------------------------------------------------------------
# notes.txt -- Developer notes
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/notes.txt" << 'NOTESEOF'
Developer Notes - Pet Tracker 3000
===================================

Version 1.2 Changes:
- Added stats section to show pet count and most popular type
- Cleaned up CSS for mobile responsiveness
- Fixed bug where fish age was displayed as NaN

Known Issues:
- Stylesheet might not load if filename is wrong (need to double-check)
- No data persistence yet (pets reset on page reload)
- Add Pet button could use better validation

Future Ideas:
- Add pet photos
- Sort pets by name, age, or type
- Export pet list to CSV
- Dark mode support
NOTESEOF

# --------------------------------------------------------------------------
# images/logo.png -- Create a tiny placeholder
# We can't create a real PNG in pure bash, so we create a placeholder text file
# that Codex will identify as a non-image placeholder
# --------------------------------------------------------------------------
cat > "$PROJECT_DIR/images/logo.txt" << 'LOGOEOF'
[Placeholder: This would normally be a logo.png image file]
[The Pet Tracker 3000 logo: a purple paw print with the text "PT3000"]
[Image dimensions: 200x200 pixels]
LOGOEOF

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Files created:"
echo "  $PROJECT_DIR/index.html      (contains THE BUG: wrong CSS filename)"
echo "  $PROJECT_DIR/style.css       (actual filename -- no 's')"
echo "  $PROJECT_DIR/app.js          (contains THE EASTER EGG)"
echo "  $PROJECT_DIR/data.json       (pet data)"
echo "  $PROJECT_DIR/README.md       (project docs)"
echo "  $PROJECT_DIR/config.yaml     (config)"
echo "  $PROJECT_DIR/notes.txt       (developer notes)"
echo "  $PROJECT_DIR/images/logo.txt (image placeholder)"
echo ""
echo "THE BUG:        index.html references 'styles.css' but file is 'style.css'"
echo "THE EASTER EGG: Comment in app.js -- secret word is 'PINEAPPLE'"
echo ""
echo "To distribute to students:"
echo "  cd $HOME && zip -r mystery-project.zip mystery-project/"
echo "  -- or --"
echo "  cp -r $PROJECT_DIR /path/to/student/machines/"
echo ""
echo "Done! Ready for Lab 01."
