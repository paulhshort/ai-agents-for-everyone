#!/usr/bin/env node

/**
 * Codex Ultimate Guide -- Interactive Quiz Runner
 *
 * A fully working, interactive quiz that tests your knowledge of
 * OpenAI Codex. Questions are loaded from YAML files in the
 * quiz/questions/ directory.
 *
 * Usage:
 *   cd quiz
 *   npm install
 *   npm start
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import inquirer from "inquirer";
import YAML from "yaml";

// Get the directory of this script so we can find the questions folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const QUESTIONS_DIR = path.join(__dirname, "..", "questions");

// ============================================================
// LOAD QUESTIONS FROM YAML FILES
// ============================================================

function loadAllQuestions() {
  const questions = [];
  const categories = new Map();

  let files;
  try {
    files = fs.readdirSync(QUESTIONS_DIR).filter((f) => f.endsWith(".yaml"));
  } catch (err) {
    console.error(
      chalk.red(
        `\nError: Could not find questions directory at ${QUESTIONS_DIR}`
      )
    );
    console.error(
      chalk.yellow("Make sure you are running this from the quiz/ folder.\n")
    );
    process.exit(1);
  }

  if (files.length === 0) {
    console.error(chalk.red("\nError: No question files found.\n"));
    process.exit(1);
  }

  for (const file of files) {
    const filePath = path.join(QUESTIONS_DIR, file);
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const parsed = YAML.parse(content);

      if (!Array.isArray(parsed)) continue;

      // Derive category name from filename: "01-quick-start.yaml" -> "Quick Start"
      const categoryName = file
        .replace(/^\d+-/, "")
        .replace(/\.yaml$/, "")
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      const categoryNumber = file.match(/^(\d+)/)?.[1] || "00";

      for (const q of parsed) {
        if (q && q.id && q.question && q.options && q.answer) {
          q._category = categoryName;
          q._categoryNumber = categoryNumber;
          q._file = file;
          questions.push(q);

          if (!categories.has(categoryName)) {
            categories.set(categoryName, {
              name: categoryName,
              number: categoryNumber,
              count: 0,
            });
          }
          categories.get(categoryName).count++;
        }
      }
    } catch (err) {
      console.warn(
        chalk.yellow(`Warning: Could not parse ${file}: ${err.message}`)
      );
    }
  }

  // Sort categories by number
  const sortedCategories = Array.from(categories.values()).sort((a, b) =>
    a.number.localeCompare(b.number)
  );

  return { questions, categories: sortedCategories };
}

// ============================================================
// DISPLAY HELPERS
// ============================================================

function clearScreen() {
  process.stdout.write("\x1B[2J\x1B[0f");
}

function printHeader() {
  console.log("");
  console.log(
    chalk.bold.cyan(
      "  ================================================================"
    )
  );
  console.log(
    chalk.bold.cyan(
      "          The Ultimate OpenAI Codex Guide -- Interactive Quiz      "
    )
  );
  console.log(
    chalk.bold.cyan(
      "  ================================================================"
    )
  );
  console.log("");
}

function printWelcome(totalQuestions, totalCategories) {
  printHeader();
  console.log(
    chalk.white(
      `  Welcome! This quiz will test your knowledge of OpenAI Codex.`
    )
  );
  console.log(
    chalk.white(
      `  There are ${chalk.bold.green(totalQuestions)} questions across ${chalk.bold.green(totalCategories)} categories.`
    )
  );
  console.log("");
  console.log(
    chalk.gray(
      "  You will get instant feedback after each question, along with"
    )
  );
  console.log(
    chalk.gray(
      "  explanations and references to the guide for further reading."
    )
  );
  console.log("");
}

function getScoreRating(percentage) {
  if (percentage >= 95) return { text: "Codex Master!", color: chalk.bold.green };
  if (percentage >= 85)
    return { text: "Excellent!", color: chalk.bold.green };
  if (percentage >= 70)
    return { text: "Great job!", color: chalk.bold.cyan };
  if (percentage >= 55)
    return { text: "Good effort!", color: chalk.bold.yellow };
  if (percentage >= 40)
    return {
      text: "Keep learning!",
      color: chalk.bold.yellow,
    };
  return {
    text: "Review the guide and try again!",
    color: chalk.bold.red,
  };
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================================
// QUIZ FLOW
// ============================================================

async function selectCategory(categories) {
  const choices = [
    {
      name: chalk.bold("All Categories") +
        chalk.gray(` (${categories.reduce((s, c) => s + c.count, 0)} questions)`),
      value: "all",
    },
    new inquirer.Separator("--- Categories ---"),
    ...categories.map((c) => ({
      name: `${c.number}. ${c.name}` + chalk.gray(` (${c.count} questions)`),
      value: c.name,
    })),
  ];

  const { category } = await inquirer.prompt([
    {
      type: "list",
      name: "category",
      message: "Which category would you like to study?",
      choices,
      pageSize: 20,
    },
  ]);

  return category;
}

async function selectDifficulty() {
  const { difficulty } = await inquirer.prompt([
    {
      type: "list",
      name: "difficulty",
      message: "What difficulty level?",
      choices: [
        {
          name:
            chalk.green("All levels") +
            chalk.gray(" (beginner, intermediate, and advanced)"),
          value: "all",
        },
        {
          name:
            chalk.green("Beginner") +
            chalk.gray(" (just starting out)"),
          value: "beginner",
        },
        {
          name:
            chalk.yellow("Intermediate") +
            chalk.gray(" (comfortable with the basics)"),
          value: "intermediate",
        },
        {
          name:
            chalk.red("Advanced") +
            chalk.gray(" (deep knowledge)"),
          value: "advanced",
        },
      ],
    },
  ]);

  return difficulty;
}

async function selectQuestionCount(available) {
  const choices = [];

  if (available >= 5) choices.push({ name: "5 questions (quick quiz)", value: 5 });
  if (available >= 10) choices.push({ name: "10 questions (standard)", value: 10 });
  if (available >= 15) choices.push({ name: "15 questions (thorough)", value: 15 });
  if (available >= 20) choices.push({ name: "20 questions (comprehensive)", value: 20 });

  choices.push({
    name: `All ${available} questions (complete)`,
    value: available,
  });

  const { count } = await inquirer.prompt([
    {
      type: "list",
      name: "count",
      message: `How many questions? (${available} available)`,
      choices,
    },
  ]);

  return count;
}

async function askQuestion(question, questionNumber, totalQuestions) {
  console.log("");
  console.log(
    chalk.bold.cyan(
      `  Question ${questionNumber} of ${totalQuestions}`
    ) +
      chalk.gray(
        `  [${question._category}] [${question.difficulty}]`
      )
  );
  console.log(
    chalk.gray("  " + "-".repeat(56))
  );
  console.log("");
  console.log(chalk.bold.white(`  ${question.question}`));
  console.log("");

  const optionLetters = Object.keys(question.options);
  const choices = optionLetters.map((letter) => ({
    name: `${letter.toUpperCase()}) ${question.options[letter]}`,
    value: letter,
    short: letter.toUpperCase(),
  }));

  const { answer } = await inquirer.prompt([
    {
      type: "list",
      name: "answer",
      message: "Your answer:",
      choices,
    },
  ]);

  const correct = answer === question.answer;

  console.log("");

  if (correct) {
    console.log(
      chalk.bold.green("  Correct!")
    );
  } else {
    console.log(
      chalk.bold.red(
        `  Not quite. The correct answer is ${question.answer.toUpperCase()}) ${question.options[question.answer]}`
      )
    );
  }

  console.log("");

  // Show explanation
  const explanation =
    typeof question.explanation === "string"
      ? question.explanation.trim()
      : String(question.explanation || "").trim();

  if (explanation) {
    console.log(chalk.gray("  Explanation:"));
    // Word-wrap the explanation to fit the terminal
    const words = explanation.split(/\s+/);
    let line = "  ";
    for (const word of words) {
      if (line.length + word.length + 1 > 72) {
        console.log(chalk.gray(line));
        line = "  " + word;
      } else {
        line += (line.trim() === "" ? "" : " ") + word;
      }
    }
    if (line.trim()) console.log(chalk.gray(line));
  }

  // Show guide reference
  if (question.guide_ref) {
    console.log("");
    console.log(
      chalk.blue(`  Learn more: ${question.guide_ref}`)
    );
  }

  console.log(
    chalk.gray("\n  " + "-".repeat(56))
  );

  // Brief pause before next question
  await inquirer.prompt([
    {
      type: "input",
      name: "continue",
      message: chalk.gray("Press Enter to continue..."),
    },
  ]);

  return correct;
}

async function showResults(score, total, wrongAnswers) {
  console.log("");
  console.log(
    chalk.bold.cyan(
      "  ================================================================"
    )
  );
  console.log(
    chalk.bold.cyan(
      "                          Quiz Complete!                          "
    )
  );
  console.log(
    chalk.bold.cyan(
      "  ================================================================"
    )
  );
  console.log("");

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const rating = getScoreRating(percentage);

  console.log(
    chalk.bold.white(
      `  Score: ${score} out of ${total} (${percentage}%)`
    )
  );
  console.log("");
  console.log("  " + rating.color(rating.text));
  console.log("");

  // Score bar
  const barWidth = 40;
  const filledWidth = Math.round((percentage / 100) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  const barColor = percentage >= 70 ? chalk.green : percentage >= 40 ? chalk.yellow : chalk.red;
  console.log(
    "  " +
      barColor("[" + "#".repeat(filledWidth) + "-".repeat(emptyWidth) + "]") +
      ` ${percentage}%`
  );
  console.log("");

  // Show missed questions for review
  if (wrongAnswers.length > 0 && wrongAnswers.length <= 10) {
    console.log(
      chalk.bold.yellow("  Questions to review:")
    );
    console.log("");
    for (const q of wrongAnswers) {
      console.log(
        chalk.yellow(
          `  - ${q.question}`
        )
      );
      console.log(
        chalk.gray(
          `    Answer: ${q.answer.toUpperCase()}) ${q.options[q.answer]}`
        )
      );
      if (q.guide_ref) {
        console.log(
          chalk.blue(`    See: ${q.guide_ref}`)
        );
      }
      console.log("");
    }
  } else if (wrongAnswers.length > 10) {
    console.log(
      chalk.yellow(
        `  You missed ${wrongAnswers.length} questions. Consider reviewing the guide`
      )
    );
    console.log(
      chalk.yellow(
        "  sections mentioned in the explanations for more practice."
      )
    );
    console.log("");
  }

  if (percentage === 100) {
    console.log(
      chalk.bold.green(
        "  Perfect score! You really know your Codex!"
      )
    );
    console.log("");
  }
}

async function askPlayAgain() {
  const { playAgain } = await inquirer.prompt([
    {
      type: "confirm",
      name: "playAgain",
      message: "Would you like to take another quiz?",
      default: true,
    },
  ]);
  return playAgain;
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  // Load all questions at startup
  const { questions: allQuestions, categories } = loadAllQuestions();

  if (allQuestions.length === 0) {
    console.error(
      chalk.red("\nNo valid questions found. Check the YAML files.\n")
    );
    process.exit(1);
  }

  let keepPlaying = true;

  while (keepPlaying) {
    clearScreen();
    printWelcome(allQuestions.length, categories.length);

    // Step 1: Pick a category
    const selectedCategory = await selectCategory(categories);

    // Step 2: Pick a difficulty
    const selectedDifficulty = await selectDifficulty();

    // Filter questions based on selections
    let filteredQuestions = [...allQuestions];

    if (selectedCategory !== "all") {
      filteredQuestions = filteredQuestions.filter(
        (q) => q._category === selectedCategory
      );
    }

    if (selectedDifficulty !== "all") {
      filteredQuestions = filteredQuestions.filter(
        (q) => q.difficulty === selectedDifficulty
      );
    }

    if (filteredQuestions.length === 0) {
      console.log("");
      console.log(
        chalk.yellow(
          "  No questions match your selections. Try different options."
        )
      );
      console.log("");
      await inquirer.prompt([
        {
          type: "input",
          name: "continue",
          message: chalk.gray("Press Enter to go back..."),
        },
      ]);
      continue;
    }

    // Step 3: Pick how many questions
    const questionCount = await selectQuestionCount(filteredQuestions.length);

    // Shuffle and pick the requested number of questions
    const selectedQuestions = shuffleArray(filteredQuestions).slice(
      0,
      questionCount
    );

    console.log("");
    console.log(
      chalk.bold.cyan(
        `  Starting quiz: ${questionCount} questions`
      )
    );
    if (selectedCategory !== "all")
      console.log(chalk.gray(`  Category: ${selectedCategory}`));
    if (selectedDifficulty !== "all")
      console.log(chalk.gray(`  Difficulty: ${selectedDifficulty}`));
    console.log("");

    // Step 4: Ask questions
    let score = 0;
    const wrongAnswers = [];

    for (let i = 0; i < selectedQuestions.length; i++) {
      const correct = await askQuestion(
        selectedQuestions[i],
        i + 1,
        selectedQuestions.length
      );

      if (correct) {
        score++;
      } else {
        wrongAnswers.push(selectedQuestions[i]);
      }
    }

    // Step 5: Show results
    await showResults(score, selectedQuestions.length, wrongAnswers);

    // Step 6: Play again?
    keepPlaying = await askPlayAgain();
  }

  console.log("");
  console.log(
    chalk.bold.cyan(
      "  Thanks for taking the quiz! Keep learning and exploring Codex."
    )
  );
  console.log(
    chalk.gray(
      "  For more, check out the Ultimate Codex Guide."
    )
  );
  console.log("");
}

// Run the quiz
main().catch((err) => {
  if (err.name === "ExitPromptError" || err.message?.includes("force closed")) {
    // User pressed Ctrl+C -- exit gracefully
    console.log("");
    console.log(chalk.gray("  Quiz ended. See you next time!"));
    console.log("");
    process.exit(0);
  }
  console.error(chalk.red(`\nError: ${err.message}\n`));
  process.exit(1);
});
