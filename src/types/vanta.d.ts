declare module "vanta/dist/vanta.globe.min" {
  import type * as THREE from "three";

  export interface VantaOptions {
    el: HTMLElement | string | null;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    [key: string]: unknown;
  }

  export interface VantaEffect {
    setOptions: (options: Partial<VantaOptions>) => void;
    destroy: () => void;
  }

  const vantaGlobe: (options: VantaOptions) => VantaEffect;
  export default vantaGlobe;
}
