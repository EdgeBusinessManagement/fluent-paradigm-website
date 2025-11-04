"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0E14] via-[#0d1219] to-[#0A0E14] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="particles-container">
          {mounted &&
            [...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                  // @ts-ignore - CSS custom properties
                  "--tx": `${(Math.random() - 0.5) * 200}px`,
                  "--ty": `${(Math.random() - 0.5) * 200}px`,
                }}
              />
            ))}
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fpCopper" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E64522" />
            <stop offset="50%" stopColor="#F28B4F" />
            <stop offset="100%" stopColor="#F8C16B" />
          </linearGradient>
        </defs>

        <path
          d="M-50 520 C 250 420, 450 650, 750 540 S 1250 420, 1300 540"
          fill="none"
          stroke="url(#fpCopper)"
          strokeWidth="2"
          className="animate-wave-flow"
        />
        <path
          d="M-50 620 C 300 520, 520 700, 900 560 S 1250 520, 1300 560"
          fill="none"
          stroke="url(#fpCopper)"
          strokeWidth="1.6"
          className="animate-wave-flow-delayed"
          opacity="0.6"
        />
        <path
          d="M-50 420 C 200 360, 520 460, 840 420 S 1200 380, 1300 400"
          fill="none"
          stroke="url(#fpCopper)"
          strokeWidth="1.2"
          className="animate-wave-pulse"
          opacity="0.45"
        />
      </svg>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,69,34,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(242,139,79,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(248,193,107,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="mb-12 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-[#E64522]/30 blur-3xl" />
              <Image
                src="/logo.png"
                alt="Fluent Paradigm Logo"
                width={180}
                height={180}
                className="relative drop-shadow-copper mx-auto"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            <span className="copper-gradient-text glow-text">Innovation with Integrity</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Building intelligent, human-centered technology for a connected world.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto text-pretty leading-relaxed">
            Fluent Paradigm Technologies engineers modern digital platforms that empower education, government, and
            enterprise — combining innovation, empathy, and excellence to create meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="copper-gradient text-[#0A0E14] font-bold text-lg px-8 py-6 rounded-md transition-all hover:opacity-90 hover:scale-105"
            >
              <Link href="/projects">
                Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-md transition-all bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
