'use client'

import { SKILLS } from "@/lib/constants"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-200">About Me</h2>
          <p className="text-neutral-400 leading-relaxed">
            I'm a passionate frontend developer with experience in building modern web applications. 
            I specialize in React and Next.js, focusing on creating beautiful and performant user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto">
          {SKILLS.map((skill) => (
            <div 
              key={skill.title}
              className="flex items-center gap-2 rounded-lg border border-neutral-800 p-4 hover:border-neutral-700 transition-colors bg-neutral-900/50"
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="font-medium text-neutral-200">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}