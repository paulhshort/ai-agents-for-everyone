module.exports = [
"[project]/src/data/demos/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Demo scripts for the terminal mockup component.
// Each demo teaches a specific concept through a simulated terminal session.
__turbopack_context__.s([
    "demos",
    ()=>demos,
    "getDemo",
    ()=>getDemo,
    "getDemoIndex",
    ()=>getDemoIndex,
    "getDemoNavigation",
    ()=>getDemoNavigation
]);
const demos = [
    {
        id: 'first-contact',
        title: 'Your First Codex Command',
        description: 'See how easy it is to start a conversation with an AI agent right from your terminal — no coding required.',
        concept: 'Basic Interaction',
        wowFactor: 3,
        terminalTitle: 'codex-demo ~ Terminal',
        takeaway: 'Codex understands natural language. You just tell it what you want, and it figures out the steps.',
        terminalScript: [
            {
                type: 'comment',
                text: 'Launch Codex in any folder on your computer'
            },
            {
                type: 'input',
                text: 'codex',
                delay: 600
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  ╔══════════════════════════════════════╗'
            },
            {
                type: 'output',
                text: '  ║   Welcome to OpenAI Codex CLI        ║'
            },
            {
                type: 'output',
                text: '  ║   Model: o4-mini    Approval: suggest ║'
            },
            {
                type: 'output',
                text: '  ╚══════════════════════════════════════╝'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'What files are in this folder? Give me a plain-English summary of each one.',
                delay: 800
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Reading the folder contents...',
                delay: 200
            },
            {
                type: 'output',
                text: '  > Read meeting-notes.docx',
                delay: 100
            },
            {
                type: 'output',
                text: '  > Read budget-2026.xlsx',
                delay: 100
            },
            {
                type: 'output',
                text: '  > Read project-timeline.pdf',
                delay: 100
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: 'Here\'s what\'s in this folder:',
                delay: 300
            },
            {
                type: 'output',
                text: '  1. meeting-notes.docx — Notes from the March 15 team meeting'
            },
            {
                type: 'output',
                text: '  2. budget-2026.xlsx — Annual budget spreadsheet with 4 tabs'
            },
            {
                type: 'output',
                text: '  3. project-timeline.pdf — A Gantt chart for Q2 deliverables'
            }
        ]
    },
    {
        id: 'mystery-folder',
        title: 'Mystery Folder Detective',
        description: 'Watch Codex explore an unknown folder and explain what it contains — in seconds.',
        concept: 'File Understanding',
        wowFactor: 4,
        terminalTitle: 'mystery-project ~ Terminal',
        takeaway: 'AI agents can read and understand entire folders of files, giving you a head start on any project.',
        terminalScript: [
            {
                type: 'comment',
                text: 'You found a mystery folder. What does it contain?',
                delay: 400
            },
            {
                type: 'input',
                text: 'cd ~/mystery-project && codex',
                delay: 600
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  Welcome to OpenAI Codex CLI'
            },
            {
                type: 'output',
                text: '  Model: o4-mini    Sandbox: read-only'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'What does this project do? Explain it like I\'m 14.',
                delay: 1000
            },
            {
                type: 'output',
                text: '',
                delay: 400
            },
            {
                type: 'output',
                text: 'Let me explore the project...',
                delay: 200
            },
            {
                type: 'output',
                text: '  > Read package.json',
                delay: 150
            },
            {
                type: 'output',
                text: '  > Read src/index.js',
                delay: 150
            },
            {
                type: 'output',
                text: '  > Read src/api/weather.js',
                delay: 150
            },
            {
                type: 'output',
                text: '  > Read src/components/Dashboard.jsx',
                delay: 150
            },
            {
                type: 'output',
                text: '  > Read README.md',
                delay: 150
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'This is a **Weather Dashboard** app! Here\'s what it does:'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '1. You type in a city name'
            },
            {
                type: 'output',
                text: '2. It calls a weather API to get live data'
            },
            {
                type: 'output',
                text: '3. It shows temperature, humidity, and a 5-day forecast'
            },
            {
                type: 'output',
                text: '4. You can save favorite cities for quick access'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: 'Tech stack: React + Express + OpenWeatherMap API'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: 'Think of it as your own personal weather station!'
            }
        ]
    },
    {
        id: 'document-detective',
        title: 'Document Detective',
        description: 'Codex finds inconsistencies, errors, and contradictions across a set of documents.',
        concept: 'Document Analysis',
        wowFactor: 5,
        terminalTitle: 'report-review ~ Terminal',
        takeaway: 'AI agents don\'t just read documents — they cross-reference them and catch things humans miss.',
        terminalScript: [
            {
                type: 'comment',
                text: 'We have 3 reports that should agree. Let\'s check.',
                delay: 400
            },
            {
                type: 'input',
                text: 'codex --sandbox read-only',
                delay: 600
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  Welcome to OpenAI Codex CLI'
            },
            {
                type: 'output',
                text: '  Sandbox: read-only'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'Read the Q1 report, the budget summary, and the board presentation. Find any numbers or claims that contradict each other.',
                delay: 1000
            },
            {
                type: 'output',
                text: '',
                delay: 400
            },
            {
                type: 'output',
                text: 'Reading Q1-report.docx...',
                delay: 200
            },
            {
                type: 'output',
                text: 'Reading budget-summary.xlsx...',
                delay: 150
            },
            {
                type: 'output',
                text: 'Reading board-presentation.pptx...',
                delay: 150
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Found 3 inconsistencies:',
                delay: 300
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  1. Revenue figure mismatch:'
            },
            {
                type: 'output',
                text: '     Q1 report says $2.4M | Board deck says $2.6M'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  2. Headcount conflict:'
            },
            {
                type: 'output',
                text: '     Budget says 45 FTEs | Q1 report says 48 FTEs'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  3. Launch date inconsistency:'
            },
            {
                type: 'output',
                text: '     Board deck says "June launch" | Q1 report says "July target"'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: 'Recommendation: Reconcile the Q1 report first — it has the most detail.'
            }
        ]
    },
    {
        id: 'sandbox-modes',
        title: 'Sandbox Showdown',
        description: 'See the same command behave differently in each sandbox mode.',
        concept: 'Safety & Permissions',
        wowFactor: 3,
        terminalTitle: 'sandbox-demo ~ Terminal',
        takeaway: 'Sandbox modes are your safety net. Start restrictive, upgrade only when you need to.',
        terminalScript: [
            {
                type: 'comment',
                text: 'Read-Only: Can AI write a file?',
                delay: 400
            },
            {
                type: 'input',
                text: 'codex --sandbox read-only',
                delay: 500
            },
            {
                type: 'output',
                text: '  Sandbox: read-only'
            },
            {
                type: 'input',
                text: 'Create a file called notes.txt',
                delay: 800
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'I can\'t create files in read-only mode.',
                delay: 200
            },
            {
                type: 'output',
                text: 'Here\'s the command you\'d use:'
            },
            {
                type: 'output',
                text: '  echo "Notes" > notes.txt'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'comment',
                text: 'Workspace-Write: Same request...',
                delay: 600
            },
            {
                type: 'input',
                text: 'codex --sandbox workspace-write',
                delay: 500
            },
            {
                type: 'input',
                text: 'Create a file called notes.txt',
                delay: 800
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Created notes.txt in project folder.',
                delay: 200
            },
            {
                type: 'output',
                text: '  WRITE notes.txt (+1 line)'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'comment',
                text: 'Notice: workspace-write only allows changes inside the project.',
                delay: 400
            },
            {
                type: 'input',
                text: 'Write to /etc/config',
                delay: 600
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Denied: /etc/config is outside the workspace.'
            },
            {
                type: 'output',
                text: 'I can only modify files within this project folder.'
            }
        ]
    },
    {
        id: 'instant-organizer',
        title: 'Instant File Organizer',
        description: 'Watch Codex organize a messy folder of files by type, date, and topic — automatically.',
        concept: 'File Organization',
        wowFactor: 5,
        terminalTitle: 'messy-folder ~ Terminal',
        takeaway: 'With a clear instruction, Codex can organize hundreds of files in minutes instead of hours.',
        terminalScript: [
            {
                type: 'comment',
                text: 'This Downloads folder is a disaster. Let\'s fix it!',
                delay: 400
            },
            {
                type: 'input',
                text: 'codex --sandbox workspace-write',
                delay: 600
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  Welcome to OpenAI Codex CLI'
            },
            {
                type: 'output',
                text: '  Sandbox: workspace-write'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'Organize all the files in this folder. Sort them into subfolders by type: Documents, Spreadsheets, Images, PDFs, and Other. Then within each subfolder, group by month.',
                delay: 1200
            },
            {
                type: 'output',
                text: '',
                delay: 500
            },
            {
                type: 'output',
                text: 'Scanning folder... found 147 files.',
                delay: 300
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  CREATE Documents/',
                delay: 200
            },
            {
                type: 'output',
                text: '  CREATE Documents/2026-01/',
                delay: 150
            },
            {
                type: 'output',
                text: '  CREATE Documents/2026-02/',
                delay: 150
            },
            {
                type: 'output',
                text: '  CREATE Documents/2026-03/',
                delay: 150
            },
            {
                type: 'output',
                text: '  CREATE Spreadsheets/',
                delay: 150
            },
            {
                type: 'output',
                text: '  CREATE Images/',
                delay: 150
            },
            {
                type: 'output',
                text: '  CREATE PDFs/',
                delay: 150
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Moving files...',
                delay: 200
            },
            {
                type: 'output',
                text: '  MOVE 34 documents → Documents/'
            },
            {
                type: 'output',
                text: '  MOVE 22 spreadsheets → Spreadsheets/'
            },
            {
                type: 'output',
                text: '  MOVE 51 images → Images/'
            },
            {
                type: 'output',
                text: '  MOVE 28 PDFs → PDFs/'
            },
            {
                type: 'output',
                text: '  MOVE 12 other files → Other/'
            },
            {
                type: 'output',
                text: '',
                delay: 400
            },
            {
                type: 'output',
                text: '147 files organized into 5 categories. Folder is clean!'
            }
        ]
    },
    {
        id: 'writing-coach',
        title: 'AI Writing Coach',
        description: 'Codex reviews a draft essay and suggests improvements — like having an editor on call.',
        concept: 'Writing Improvement',
        wowFactor: 4,
        terminalTitle: 'essay-review ~ Terminal',
        takeaway: 'AI agents can review your writing for clarity, structure, grammar, and persuasiveness in seconds.',
        terminalScript: [
            {
                type: 'comment',
                text: 'Let\'s have Codex review our draft essay.',
                delay: 400
            },
            {
                type: 'input',
                text: 'codex --sandbox read-only',
                delay: 600
            },
            {
                type: 'output',
                text: '  Sandbox: read-only'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'Review my essay draft in essay-v2.docx. Check for clarity, grammar, structure, and persuasiveness. Be specific about what to improve.',
                delay: 1000
            },
            {
                type: 'output',
                text: '',
                delay: 400
            },
            {
                type: 'output',
                text: 'Reading essay-v2.docx...',
                delay: 200
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Writing Review:',
                delay: 200
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  CLARITY  Para 2: The thesis is buried in the third sentence.'
            },
            {
                type: 'output',
                text: '           → Move it to the opening line for immediate impact.'
            },
            {
                type: 'output',
                text: '  GRAMMAR  Para 5: "Their" should be "There" (line 34)'
            },
            {
                type: 'output',
                text: '  STRUCT   The conclusion repeats the intro instead of advancing it.'
            },
            {
                type: 'output',
                text: '           → Add a forward-looking statement or call to action.'
            },
            {
                type: 'output',
                text: '  TONE     Para 3: Switches from formal to casual mid-paragraph.'
            },
            {
                type: 'output',
                text: '  STRONG   Great use of evidence in paragraphs 4 and 6!'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: 'Found 4 suggestions and 1 highlight. Overall: solid draft, needs minor revision.'
            },
            {
                type: 'output',
                text: 'Want me to rewrite the weak sections? (Switch to workspace-write mode first)'
            }
        ]
    },
    {
        id: 'research-assistant',
        title: 'Research Assistant',
        description: 'Codex researches a topic using your files and creates a structured summary with sources.',
        concept: 'Research & Synthesis',
        wowFactor: 4,
        terminalTitle: 'research-project ~ Terminal',
        takeaway: 'AI agents can read multiple sources, extract key information, and synthesize it into a structured summary.',
        terminalScript: [
            {
                type: 'comment',
                text: 'We have 6 articles about renewable energy. Let\'s synthesize them.',
                delay: 400
            },
            {
                type: 'input',
                text: 'codex --sandbox workspace-write',
                delay: 600
            },
            {
                type: 'output',
                text: '  Sandbox: workspace-write'
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'input',
                text: 'Read all the PDFs in the sources/ folder. Create a structured research summary covering the main arguments, key statistics, and areas of disagreement between authors.',
                delay: 1000
            },
            {
                type: 'output',
                text: '',
                delay: 500
            },
            {
                type: 'output',
                text: 'Reading sources/solar-trends-2025.pdf...',
                delay: 200
            },
            {
                type: 'output',
                text: 'Reading sources/wind-energy-costs.pdf...',
                delay: 150
            },
            {
                type: 'output',
                text: 'Reading sources/grid-storage-challenges.pdf...',
                delay: 150
            },
            {
                type: 'output',
                text: 'Reading sources/policy-comparison.pdf...',
                delay: 150
            },
            {
                type: 'output',
                text: 'Reading sources/nuclear-vs-renewables.pdf...',
                delay: 150
            },
            {
                type: 'output',
                text: 'Reading sources/consumer-adoption.pdf...',
                delay: 150
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Synthesizing findings across 6 sources...',
                delay: 300
            },
            {
                type: 'output',
                text: ''
            },
            {
                type: 'output',
                text: '  CREATE research-summary.md',
                delay: 200
            },
            {
                type: 'output',
                text: '    - 3 main themes identified'
            },
            {
                type: 'output',
                text: '    - 12 key statistics with source citations'
            },
            {
                type: 'output',
                text: '    - 2 areas of disagreement between authors'
            },
            {
                type: 'output',
                text: '    - Suggested further reading'
            },
            {
                type: 'output',
                text: '',
                delay: 300
            },
            {
                type: 'output',
                text: 'Research summary saved to research-summary.md',
                delay: 200
            },
            {
                type: 'output',
                text: 'All claims are cited with source document and page number.'
            }
        ]
    }
];
function getDemo(id) {
    return demos.find((d)=>d.id === id);
}
function getDemoIndex(id) {
    return demos.findIndex((d)=>d.id === id);
}
function getDemoNavigation(id) {
    const idx = getDemoIndex(id);
    return {
        prev: idx > 0 ? demos[idx - 1] : null,
        next: idx < demos.length - 1 ? demos[idx + 1] : null
    };
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-sm transition-all duration-300 hover:border-[oklch(0.65_0.25_290/0.4)] hover:shadow-[0_0_24px_oklch(0.55_0.25_290/0.12)]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-[var(--muted-foreground)]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm",
            secondary: "border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)]",
            destructive: "border-transparent bg-[var(--destructive)] text-white shadow-sm",
            outline: "border-[var(--border)] text-[var(--foreground)]",
            purple: "border-transparent bg-[oklch(0.55_0.25_290/0.15)] text-[oklch(0.75_0.2_290)] border-[oklch(0.55_0.25_290/0.3)]",
            blue: "border-transparent bg-[oklch(0.6_0.2_250/0.15)] text-[oklch(0.75_0.15_250)] border-[oklch(0.6_0.2_250/0.3)]",
            cyan: "border-transparent bg-[oklch(0.7_0.15_200/0.15)] text-[oklch(0.8_0.1_200)] border-[oklch(0.7_0.15_200/0.3)]",
            green: "border-transparent bg-[oklch(0.65_0.2_155/0.15)] text-[oklch(0.75_0.15_155)] border-[oklch(0.65_0.2_155/0.3)]",
            amber: "border-transparent bg-[oklch(0.75_0.15_80/0.15)] text-[oklch(0.8_0.12_80)] border-[oklch(0.75_0.15_80/0.3)]"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none", {
    variants: {
        variant: {
            default: "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md hover:shadow-[var(--glow-purple)] hover:brightness-110 active:scale-[0.97]",
            destructive: "bg-[var(--destructive)] text-white shadow-md hover:bg-[var(--destructive)]/90 hover:shadow-[0_0_20px_oklch(0.577_0.245_27.325/0.4)] active:scale-[0.97]",
            outline: "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:border-[var(--ring)]",
            secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] shadow-sm hover:bg-[var(--secondary)]/80 active:scale-[0.97]",
            ghost: "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
            link: "text-[var(--primary)] underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-5 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-12 rounded-xl px-8 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/app/demos/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demos$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/demos/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/* ---------- Star rating ---------- */ function StarRating({ rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-0.5",
        children: Array.from({
            length: 5
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: `w-4 h-4 ${i < rating ? 'text-[var(--brand-amber)]' : 'text-[var(--muted-foreground)] opacity-30'}`,
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }, void 0, false, {
                    fileName: "[project]/src/app/demos/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/demos/page.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/demos/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
/* ---------- Demo gradient accents ---------- */ const demoGradients = [
    'from-[oklch(0.55_0.25_290)] to-[oklch(0.6_0.2_250)]',
    'from-[oklch(0.6_0.2_250)] to-[oklch(0.7_0.15_200)]',
    'from-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_155)]',
    'from-[oklch(0.65_0.2_155)] to-[oklch(0.75_0.15_80)]',
    'from-[oklch(0.55_0.25_290)] to-[oklch(0.7_0.15_200)]',
    'from-[oklch(0.6_0.2_250)] to-[oklch(0.65_0.2_155)]',
    'from-[oklch(0.7_0.15_200)] to-[oklch(0.55_0.25_290)]'
];
function DemosPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 px-6 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: 'radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.6 0.2 250 / 0.1), transparent 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/demos/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-5xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/demos/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demos/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        "Back to Course"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/demos/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "blue",
                                    className: "mb-4 text-sm px-4 py-1.5",
                                    children: "Interactive Demos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demos/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 gradient-text",
                                    children: "Demo Launcher"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demos/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-[var(--muted-foreground)] max-w-2xl",
                                    children: "Watch AI agents in action through guided terminal demonstrations. Each demo teaches a key concept."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/demos/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/demos/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/demos/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/demos/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demos$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demos"].map((demo, idx)=>{
                        const gradient = demoGradients[idx % demoGradients.length];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: idx * 0.08,
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/demos/${demo.id}`,
                                className: "block group h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${gradient}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demos/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[oklch(0.55_0.25_290/0.05)] to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/demos/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "relative pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white font-bold text-sm shadow-md`,
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/demos/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                                            rating: demo.wowFactor
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/demos/page.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/demos/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-xl group-hover:text-[var(--primary)] transition-colors",
                                                    children: demo.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/demos/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/demos/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "relative space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--muted-foreground)] leading-relaxed",
                                                    children: demo.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/demos/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-xs",
                                                    children: [
                                                        "Concept: ",
                                                        demo.concept
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/demos/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    className: "w-full justify-between group-hover:bg-[var(--accent)]",
                                                    children: [
                                                        "Launch Demo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 transition-transform group-hover:translate-x-1",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/demos/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/demos/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/demos/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/demos/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/demos/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/demos/page.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this)
                        }, demo.id, false, {
                            fileName: "[project]/src/app/demos/page.tsx",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/demos/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/demos/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/demos/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_9eab67da._.js.map