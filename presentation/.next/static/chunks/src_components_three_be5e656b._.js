(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/three/shared/floating-particles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingParticles",
    ()=>FloatingParticles,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FloatingParticles(param) {
    let { count = 200, color = '#8b5cf6', opacity = 0.6, speed = 0.3, size = 0.03, spread = 8 } = param;
    _s();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { positions, velocities } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo": ()=>{
            const pos = new Float32Array(count * 3);
            const vel = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                pos[i3] = (Math.random() - 0.5) * spread;
                pos[i3 + 1] = (Math.random() - 0.5) * spread;
                pos[i3 + 2] = (Math.random() - 0.5) * spread;
                vel[i3] = (Math.random() - 0.5) * speed * 0.01;
                vel[i3 + 1] = (Math.random() - 0.5) * speed * 0.01;
                vel[i3 + 2] = (Math.random() - 0.5) * speed * 0.01;
            }
            return {
                positions: pos,
                velocities: vel
            };
        }
    }["FloatingParticles.useMemo"], [
        count,
        spread,
        speed
    ]);
    const sizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo[sizes]": ()=>{
            const s = new Float32Array(count);
            for(let i = 0; i < count; i++){
                s[i] = size * (0.5 + Math.random());
            }
            return s;
        }
    }["FloatingParticles.useMemo[sizes]"], [
        count,
        size
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingParticles.useFrame": (param)=>{
            let { clock } = param;
            if (!pointsRef.current) return;
            const geo = pointsRef.current.geometry;
            const posAttr = geo.getAttribute('position');
            const arr = posAttr.array;
            const t = clock.getElapsedTime();
            const halfSpread = spread / 2;
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                arr[i3] += velocities[i3] + Math.sin(t * 0.5 + i) * speed * 0.002;
                arr[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.3 + i * 0.7) * speed * 0.002;
                arr[i3 + 2] += velocities[i3 + 2] + Math.sin(t * 0.4 + i * 1.3) * speed * 0.001;
                // Wrap around
                if (arr[i3] > halfSpread) arr[i3] = -halfSpread;
                if (arr[i3] < -halfSpread) arr[i3] = halfSpread;
                if (arr[i3 + 1] > halfSpread) arr[i3 + 1] = -halfSpread;
                if (arr[i3 + 1] < -halfSpread) arr[i3 + 1] = halfSpread;
                if (arr[i3 + 2] > halfSpread) arr[i3 + 2] = -halfSpread;
                if (arr[i3 + 2] < -halfSpread) arr[i3 + 2] = halfSpread;
            }
            posAttr.needsUpdate = true;
        }
    }["FloatingParticles.useFrame"]);
    const pointTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingParticles.useMemo[pointTexture]": ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.7, 'rgba(255,255,255,0.2)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);
            const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            return tex;
        }
    }["FloatingParticles.useMemo[pointTexture]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        args: [
                            positions,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/shared/floating-particles.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        args: [
                            sizes,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/shared/floating-particles.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/shared/floating-particles.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: size,
                color: color,
                transparent: true,
                opacity: opacity,
                sizeAttenuation: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                map: pointTexture
            }, void 0, false, {
                fileName: "[project]/src/components/three/shared/floating-particles.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/three/shared/floating-particles.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(FloatingParticles, "ej8TBI/KicWejI5HpfEcDtaJDzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FloatingParticles;
const __TURBOPACK__default__export__ = FloatingParticles;
var _c;
__turbopack_context__.k.register(_c, "FloatingParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/neural-network.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeuralNetwork",
    ()=>NeuralNetwork,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$shared$2f$floating$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/shared/floating-particles.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Avoid <line> collision with SVG line element
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    Line_: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"]
});
/* ---------- Configuration ---------- */ const LAYER_SIZES = [
    5,
    7,
    7,
    3
];
const LAYER_LABELS = [
    'Input',
    'Processing',
    'Processing',
    'Output'
];
const LAYER_SPACING = 3.2;
const NODE_SPACING = 1.1;
const NODE_RADIUS = 0.22;
const COLOR_INACTIVE = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#4c1d95'); // dim purple
const COLOR_ACTIVE = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#22d3ee'); // bright cyan
const COLOR_PEAK = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffffff'); // white flash
const COLOR_CONNECTION_DIM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#1e1b4b');
const COLOR_CONNECTION_ACTIVE = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#a78bfa');
/* ---------- Single Node ---------- */ function NeuralNode(param) {
    let { position, layerIndex, nodeIndex } = param;
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "NeuralNode.useFrame": (param)=>{
            let { clock } = param;
            if (!matRef.current || !meshRef.current) return;
            const t = clock.getElapsedTime();
            // Wave sweeps left-to-right across layers
            const wavePhase = t * 1.8 - layerIndex * 1.2 - nodeIndex * 0.15;
            const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 3);
            // Blend color
            const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            c.lerpColors(COLOR_INACTIVE, COLOR_ACTIVE, activation);
            if (activation > 0.85) {
                c.lerp(COLOR_PEAK, (activation - 0.85) / 0.15);
            }
            matRef.current.color.copy(c);
            matRef.current.emissive.copy(c);
            matRef.current.emissiveIntensity = 0.3 + activation * 2.5;
            // Scale pulse
            const s = 1 + activation * 0.35;
            meshRef.current.scale.setScalar(s);
            // Point light intensity
            if (lightRef.current) {
                lightRef.current.intensity = activation * 2;
                lightRef.current.color.copy(c);
            }
        }
    }["NeuralNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            NODE_RADIUS,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/neural-network.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        ref: matRef,
                        color: COLOR_INACTIVE,
                        emissive: COLOR_INACTIVE,
                        emissiveIntensity: 0.3,
                        metalness: 0.4,
                        roughness: 0.15,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/neural-network.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            NODE_RADIUS * 1.5,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/neural-network.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: COLOR_ACTIVE,
                        transparent: true,
                        opacity: 0.05,
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/neural-network.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: lightRef,
                distance: 2.5,
                intensity: 0,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/three/neural-network.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(NeuralNode, "N+lRH75UPbipO9PE45k4ynpA5MU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = NeuralNode;
/* ---------- Connections between layers ---------- */ function LayerConnections(param) {
    let { fromPositions, toPositions, layerIndex } = param;
    _s1();
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LayerConnections.useMemo[lineData]": ()=>{
            const data = [];
            let idx = 0;
            for (const fp of fromPositions){
                for (const tp of toPositions){
                    data.push({
                        from: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...fp),
                        to: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...tp),
                        idx: idx++
                    });
                }
            }
            return data;
        }
    }["LayerConnections.useMemo[lineData]"], [
        fromPositions,
        toPositions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LayerConnections.useFrame": (param)=>{
            let { clock } = param;
            if (!linesRef.current) return;
            const t = clock.getElapsedTime();
            linesRef.current.children.forEach({
                "LayerConnections.useFrame": (child, i)=>{
                    const line = child;
                    const mat = line.material;
                    const d = lineData[i];
                    const wavePhase = t * 1.8 - layerIndex * 1.2 - d.idx * 0.03;
                    const activation = Math.pow(Math.max(0, Math.sin(wavePhase)), 4);
                    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
                    c.lerpColors(COLOR_CONNECTION_DIM, COLOR_CONNECTION_ACTIVE, activation);
                    mat.color.copy(c);
                    mat.opacity = 0.08 + activation * 0.7;
                }
            }["LayerConnections.useFrame"]);
        }
    }["LayerConnections.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: linesRef,
        children: lineData.map((d, i)=>{
            const points = [
                d.from,
                d.to
            ];
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line_", {
                geometry: geo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                    color: COLOR_CONNECTION_DIM,
                    transparent: true,
                    opacity: 0.08,
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/src/components/three/neural-network.tsx",
                    lineNumber: 152,
                    columnNumber: 13
                }, this)
            }, i, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 151,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/three/neural-network.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s1(LayerConnections, "LfIXed7cnqVLH7W1XKx3bklFjoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = LayerConnections;
/* ---------- Layer label ---------- */ function LayerLabel(param) {
    let { text, position } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        position: position,
        fontSize: 0.28,
        color: "#a78bfa",
        anchorX: "center",
        anchorY: "top",
        font: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2",
        outlineWidth: 0.01,
        outlineColor: "#1e1b4b",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/three/neural-network.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c2 = LayerLabel;
function NeuralNetwork() {
    _s2();
    // Compute node positions for each layer
    const layerPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralNetwork.useMemo[layerPositions]": ()=>{
            const totalWidth = (LAYER_SIZES.length - 1) * LAYER_SPACING;
            const startX = -totalWidth / 2;
            return LAYER_SIZES.map({
                "NeuralNetwork.useMemo[layerPositions]": (nodeCount, layerIdx)=>{
                    const x = startX + layerIdx * LAYER_SPACING;
                    const totalHeight = (nodeCount - 1) * NODE_SPACING;
                    const startY = totalHeight / 2;
                    const positions = [];
                    for(let n = 0; n < nodeCount; n++){
                        positions.push([
                            x,
                            startY - n * NODE_SPACING,
                            0
                        ]);
                    }
                    return positions;
                }
            }["NeuralNetwork.useMemo[layerPositions]"]);
        }
    }["NeuralNetwork.useMemo[layerPositions]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.15
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    5,
                    5,
                    5
                ],
                intensity: 0.3,
                color: "#8b5cf6"
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -5,
                    -3,
                    3
                ],
                intensity: 0.15,
                color: "#06b6d4"
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            layerPositions.map((_, layerIdx)=>{
                if (layerIdx >= layerPositions.length - 1) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerConnections, {
                    fromPositions: layerPositions[layerIdx],
                    toPositions: layerPositions[layerIdx + 1],
                    layerIndex: layerIdx
                }, "conn-".concat(layerIdx), false, {
                    fileName: "[project]/src/components/three/neural-network.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this);
            }),
            layerPositions.map((positions, layerIdx)=>positions.map((pos, nodeIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeuralNode, {
                        position: pos,
                        layerIndex: layerIdx,
                        nodeIndex: nodeIdx
                    }, "node-".concat(layerIdx, "-").concat(nodeIdx), false, {
                        fileName: "[project]/src/components/three/neural-network.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this))),
            layerPositions.map((positions, layerIdx)=>{
                const x = positions[0][0];
                const lowestY = positions[positions.length - 1][1];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerLabel, {
                    text: LAYER_LABELS[layerIdx],
                    position: [
                        x,
                        lowestY - 0.7,
                        0
                    ]
                }, "label-".concat(layerIdx), false, {
                    fileName: "[project]/src/components/three/neural-network.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$shared$2f$floating$2d$particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingParticles"], {
                count: 300,
                color: "#7c3aed",
                opacity: 0.3,
                speed: 0.15,
                size: 0.02,
                spread: 14
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                autoRotate: true,
                autoRotateSpeed: 0.5,
                enableZoom: false,
                enablePan: false,
                maxPolarAngle: Math.PI * 0.7,
                minPolarAngle: Math.PI * 0.3
            }, void 0, false, {
                fileName: "[project]/src/components/three/neural-network.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(NeuralNetwork, "iopa7V2l0yfliJsRmcHFlfCe+e8=");
_c3 = NeuralNetwork;
const __TURBOPACK__default__export__ = NeuralNetwork;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NeuralNode");
__turbopack_context__.k.register(_c1, "LayerConnections");
__turbopack_context__.k.register(_c2, "LayerLabel");
__turbopack_context__.k.register(_c3, "NeuralNetwork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/neural-network.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/three/neural-network.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_three_be5e656b._.js.map