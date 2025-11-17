import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, TestTube, Users, ArrowRight, Lightbulb, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const positions = [
    {
      icon: Code,
      title: "Software Developers",
      description: "Build innovative solutions using modern frameworks and technologies.",
      skills: ["React/Next.js", "Node.js", "TypeScript", "Cloud Platforms"],
    },
    {
      icon: TestTube,
      title: "QA Engineers",
      description: "Ensure quality and reliability through rigorous, automated testing strategies.",
      skills: ["Test Automation", "Manual Testing", "CI/CD", "Quality Assurance"],
    },
    {
      icon: Users,
      title: "Interns",
      description: "Learn and grow through projects guided by experienced mentors",
      skills: ["Eager to Learn", "Team Player", "Problem Solver", "Tech Enthusiast"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">Careers</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                Join a team where innovation begins with integrity.
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                At Fluent Paradigm, we don't just build software — we build trust. Our culture thrives on transparency,
                curiosity, and collaboration. Every voice matters here, because real innovation starts with listening.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Open Positions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {positions.map((position, index) => (
                  <div
                    key={position.title}
                    className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <position.icon className="w-8 h-8 text-[#0A0E14]" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground">{position.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{position.description}</p>

                    <div className="space-y-2 mb-6">
                      {position.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-8 text-center copper-gradient-text">Why Fluent Paradigm?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-[#0A0E14]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Innovation</h3>
                  <p className="text-gray-400">
                    Work on cutting-edge projects that balance creativity and technical excellence.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#0A0E14]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Growth</h3>
                  <p className="text-gray-400">
                    Continuous learning, mentorship, and professional development are part of our DNA.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#0A0E14]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Impact</h3>
                  <p className="text-gray-400">Build technology that improves lives — not just interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
