import type { Object3DNode } from "@react-three/fiber";
import type { Line } from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: Object3DNode<Line, typeof Line>;
  }
}
