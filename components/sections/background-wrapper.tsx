"use client"

import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <BackgroundBeamsWithCollision>{children}</BackgroundBeamsWithCollision>
    </div>
  )
}