// react-vanilla-tilt.d.ts
declare module "react-vanilla-tilt" {
  import * as React from "react"
  interface VanillaTiltOptions {
    reverse?: boolean
    max?: number
    perspective?: number
    scale?: number
    speed?: number
    transition?: boolean
    axis?: "x" | "y" | null
    reset?: boolean
    easing?: string
    glare?: boolean
    "max-glare"?: number
    "glare-prerender"?: boolean
  }
  interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: VanillaTiltOptions
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
  }
  const Tilt: React.FC<TiltProps>
  export default Tilt
}
