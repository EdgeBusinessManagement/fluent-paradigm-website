import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Cloud, Database, Lightbulb } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "From concept to code, we build scalable, maintainable applications with modern technologies and human insight.",
      highlights: ["Full-Stack Development", "Mobile Applications", "API Development", "Legacy Modernization"],
    },
    {
      icon: Cloud,
      title: "Cloud Architecture & DevOps",
      description:
        "Infrastructure built for resilience. We design CI/CD pipelines, optimize performance, and ensure security at scale.",
      highlights: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Performance Optimization"],
    },
    {
      icon: Database,
      title: "Data Intelligence & Automation",
      description:
        "We turn complexity into clarity, transforming raw data into actionable insights powered by AI and automation.",
      highlights: ["Data Analytics", "Process Automation", "AI Integration", "Business Intelligence"],
    },
    {
      icon: Lightbulb,
      title: "Digital Product Strategy",
      description:
        "We blend empathy with expertise to design digital products users love — built with integrity from idea to launch.",
      highlights: ["Product Planning", "UX/UI Design", "Market Research", "Technical Consulting"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">Our Services</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive, human-centered technology solutions built on transparency, scalability, and purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-lg copper-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-[#0A0E14]" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-gray-300 text-sm">{highlight}</span>
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
