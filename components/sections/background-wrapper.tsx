"use client"

import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <div className="relative z-10">
        {children}
      </div>
      <div className="fixed inset-0 -z-10">
        <BackgroundBeamsWithCollision>{null}</BackgroundBeamsWithCollision>
      </div>
    </div>
  )
}