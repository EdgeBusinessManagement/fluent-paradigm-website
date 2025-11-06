// app/differentiators/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  HeartHandshake,  // People-first
  ShieldCheck,     // Integrity
  Network,         // Unified intelligence
  Sliders,         // Human-scale simplicity
  Infinity,        // Built to endure
} from "lucide-react"

export default function DifferentiatorsPage() {
  const diffs = [
    {
      icon: HeartHandshake,
      title: "People-First Innovation",
      description:
        "Technology should elevate people, not replace them. Every system begins with empathy to simplify real work and create lasting impact.",
      highlights: ["Human-centered design", "Workflow clarity", "Community outcomes", "Measurable value"],
    },
    {
      icon: ShieldCheck,
      title: "Integrity by Design",
      description:
        "Integrity isn’t an afterthought—it’s engineered in: transparent models, ethical AI, and auditable data you can trust.",
      highlights: ["Ethical AI practice", "Auditability by default", "Transparent models", "Governance-ready data"],
    },
    {
      icon: Network,
      title: "Unified Intelligence",
      description:
        "We connect data and insight across domains that rarely align—giving organizations a single, clear view of what matters most.",
      highlights: ["Cross-domain pipelines", "Single source of truth", "Actionable insights", "Interoperability"],
    },
    {
      icon: Sliders,
      title: "Human-Scale Simplicity",
      description:
        "Enterprise power with approachable design—depth and reliability without complexity for faster adoption and lower training time.",
      highlights: ["Clean UX patterns", "Operational simplicity", "Rapid onboarding", "Low cognitive load"],
    },
    {
      icon: Infinity,
      title: "Built to Endure",
      description:
        "We don’t chase trends. We design technology that evolves gracefully—sustainable, adaptable, and grounded in purpose.",
      highlights: ["Future-proof architecture", "Maintainability", "Sustainable evolution", "Long-term value"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Hero (mirror Services) */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">
                What Makes Us Different
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We don’t build for hype—we build for people and for the long game. Innovation means little without
                integrity. That’s where we stand apart.
              </p>
            </div>

            {/* Grid (same as Services) */}
            <div className="grid md:grid-cols-2 gap-8">
              {diffs.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon tile — EXACTLY like Services: copper-gradient + dark icon */}
                  <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-[#0A0E14]" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

                  <div className="space-y-2">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
