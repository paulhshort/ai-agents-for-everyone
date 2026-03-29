(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/providers/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "dark",
        enableSystem: false,
        disableTransitionOnChange: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/font-size-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontSizeProvider",
    ()=>FontSizeProvider,
    "useFontSize",
    ()=>useFontSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const FontSizeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    scale: 1,
    increase: ()=>{},
    decrease: ()=>{},
    reset: ()=>{},
    setScale: ()=>{}
});
const SCALES = [
    0.75,
    0.875,
    1,
    1.25,
    1.5,
    1.75,
    2
];
function FontSizeProvider(param) {
    let { children } = param;
    _s();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FontSizeProvider.useEffect": ()=>{
            document.documentElement.style.setProperty("--font-scale", String(scale));
        }
    }["FontSizeProvider.useEffect"], [
        scale
    ]);
    const increase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FontSizeProvider.useCallback[increase]": ()=>{
            setScale({
                "FontSizeProvider.useCallback[increase]": (s)=>{
                    const idx = SCALES.indexOf(s);
                    return idx < SCALES.length - 1 ? SCALES[idx + 1] : s;
                }
            }["FontSizeProvider.useCallback[increase]"]);
        }
    }["FontSizeProvider.useCallback[increase]"], []);
    const decrease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FontSizeProvider.useCallback[decrease]": ()=>{
            setScale({
                "FontSizeProvider.useCallback[decrease]": (s)=>{
                    const idx = SCALES.indexOf(s);
                    return idx > 0 ? SCALES[idx - 1] : s;
                }
            }["FontSizeProvider.useCallback[decrease]"]);
        }
    }["FontSizeProvider.useCallback[decrease]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FontSizeProvider.useCallback[reset]": ()=>setScale(1)
    }["FontSizeProvider.useCallback[reset]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontSizeContext.Provider, {
        value: {
            scale,
            increase,
            decrease,
            reset,
            setScale
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/font-size-provider.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(FontSizeProvider, "8KU+o61NnNz6ne9AenqU0ycS+zk=");
_c = FontSizeProvider;
function useFontSize() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FontSizeContext);
}
_s1(useFontSize, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "FontSizeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/presentation-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresentationProvider",
    ()=>PresentationProvider,
    "usePresentation",
    ()=>usePresentation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PresentationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function PresentationProvider(param) {
    let { children } = param;
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentDay: 1,
        currentModule: 1,
        currentSlide: 0,
        isFullscreen: false,
        showPresenterNotes: false,
        showControls: true
    });
    const [totalSlides, setTotalSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[setSlide]": (day, module, slide)=>{
            setState({
                "PresentationProvider.useCallback[setSlide]": (s)=>({
                        ...s,
                        currentDay: day,
                        currentModule: module,
                        currentSlide: slide
                    })
            }["PresentationProvider.useCallback[setSlide]"]);
        }
    }["PresentationProvider.useCallback[setSlide]"], []);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[nextSlide]": ()=>{
            setState({
                "PresentationProvider.useCallback[nextSlide]": (s)=>({
                        ...s,
                        currentSlide: Math.min(s.currentSlide + 1, totalSlides - 1)
                    })
            }["PresentationProvider.useCallback[nextSlide]"]);
        }
    }["PresentationProvider.useCallback[nextSlide]"], [
        totalSlides
    ]);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[prevSlide]": ()=>{
            setState({
                "PresentationProvider.useCallback[prevSlide]": (s)=>({
                        ...s,
                        currentSlide: Math.max(s.currentSlide - 1, 0)
                    })
            }["PresentationProvider.useCallback[prevSlide]"]);
        }
    }["PresentationProvider.useCallback[prevSlide]"], []);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[toggleFullscreen]": ()=>{
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                setState({
                    "PresentationProvider.useCallback[toggleFullscreen]": (s)=>({
                            ...s,
                            isFullscreen: true
                        })
                }["PresentationProvider.useCallback[toggleFullscreen]"]);
            } else {
                document.exitFullscreen();
                setState({
                    "PresentationProvider.useCallback[toggleFullscreen]": (s)=>({
                            ...s,
                            isFullscreen: false
                        })
                }["PresentationProvider.useCallback[toggleFullscreen]"]);
            }
        }
    }["PresentationProvider.useCallback[toggleFullscreen]"], []);
    const togglePresenterNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[togglePresenterNotes]": ()=>{
            setState({
                "PresentationProvider.useCallback[togglePresenterNotes]": (s)=>({
                        ...s,
                        showPresenterNotes: !s.showPresenterNotes
                    })
            }["PresentationProvider.useCallback[togglePresenterNotes]"]);
        }
    }["PresentationProvider.useCallback[togglePresenterNotes]"], []);
    const setShowControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationProvider.useCallback[setShowControls]": (show)=>{
            setState({
                "PresentationProvider.useCallback[setShowControls]": (s)=>({
                        ...s,
                        showControls: show
                    })
            }["PresentationProvider.useCallback[setShowControls]"]);
        }
    }["PresentationProvider.useCallback[setShowControls]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PresentationContext.Provider, {
        value: {
            ...state,
            setSlide,
            nextSlide,
            prevSlide,
            toggleFullscreen,
            togglePresenterNotes,
            setShowControls,
            totalSlides,
            setTotalSlides
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/presentation-provider.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(PresentationProvider, "2+DpDGVdWvCRJWk/G1u0dH3Qti0=");
_c = PresentationProvider;
function usePresentation() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PresentationContext);
    if (!ctx) throw new Error("usePresentation must be used within PresentationProvider");
    return ctx;
}
_s1(usePresentation, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "PresentationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_providers_8575c5c1._.js.map