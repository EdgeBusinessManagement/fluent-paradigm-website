import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, TreePine, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      icon: GraduationCap,
      name: "TeacherBuilt",
      description:
        "A community-driven education multi vendor marketplace connecting educators through resources, transparency, and shared success.",
      features: ["Resource Marketplace", "Educator Community", "Profit Sharing", "Analytics Dashboard"],
      color: "from-[#e64522] to-[#f28b4f]",
      href: "https://teacherbuilt.com",
    },
    {
      icon: TreePine,
      name: "Agora³",
      description:
        "A dynamic platform that transforms how organizations manage spaces, people, and experiences — combining intelligent automation with a people-first approach to design and delivery.",
      features: [
        "Real-Time Availability & Scheduling",
        "Capacity & Resource Management",
        "Offline & Field-Ready Systems",
        "Secure Payments & Reporting",
      ],
      color: "from-[#f28b4f] to-[#f8c16b]",
      href: "https://evergreensoftwarelabs.ca/",
    },
    {
      icon: Brain,
      name: "Oblio",
      description:
        "An AI-powered Fintech platform that unifies data across systems, giving organizations a single source of truth for real-time, human-readable insights.",
      features: ["AI Analytics", "Predictive Modeling", "Financial Insights", "Custom Reporting"],
      color: "from-[#f8c16b] to-[#e64522]",
      comingSoon: true,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">Our Projects</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Intelligent solutions transforming education, recreation, and finance.
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="bg-card border border-border rounded-lg p-8 md:p-12 hover:border-primary transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <project.icon className="w-10 h-10 text-[#0A0E14]" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-4 text-foreground">{project.name}</h2>
                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">{project.description}</p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2">
                        {project.href ? (
                          // Real external CTA for TeacherBuilt and Agora³
                          <a href={project.href} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        ) : project.comingSoon ? (
                          // Non-clickable "Coming Soon" pill for Oblio
                          <div className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium opacity-70 cursor-default">
                            Coming Soon
                          </div>
                        ) : null}
                      </div>
                    </div>
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
