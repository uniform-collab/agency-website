"use client"
import { cn } from "@/lib/utils"
import type React from "react" // Using 'type React' for import
import type { ReactNode } from "react" // Using 'type ReactNode' for import

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div // This is the main container for the AuroraBackground component
      className={cn(
        "relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 transition-bg dark:bg-zinc-900", // Added dark:bg-zinc-900 as per original
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        // The CSS variables MUST be defined here for the ::after pseudo-element's background to work
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)",
            // Defining the color variables that are used in the --aurora gradient above
            "--blue-300": "#93c5fd", // Corresponds to blue-300 in Tailwind config
            "--blue-400": "#60a5fa", // Corresponds to blue-400 in Tailwind config
            "--blue-500": "#3b82f6", // Corresponds to blue-500 in Tailwind config
            "--indigo-300": "#a5b4fc", // Corresponds to indigo-300 in Tailwind config
            "--violet-200": "#ddd6fe", // Corresponds to violet-200 in Tailwind config
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter
            blur-[10px]
            invert
            dark:invert-0
            after:content-[""]
            after:absolute
            after:inset-0
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora
            after:[background-attachment:fixed]
            after:mix-blend-difference
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-50
            will-change-transform`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  )
}
