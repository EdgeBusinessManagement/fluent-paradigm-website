import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">About Us</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building technology around people — not the other way around.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To engineer intelligent, human-centered platforms that empower education, government, and enterprise
                  to thrive in a connected world.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  A future where technology works with people — not around them — to create smarter, more meaningful
                  systems for everyone.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Values</h3>
                <p className="text-gray-400 leading-relaxed">
                  Innovation, integrity, excellence, and collaboration drive everything we do. We believe great products
                  are built by passionate people — and transparent teams.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-12 mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center copper-gradient-text">Leadership</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full copper-gradient mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0A0E14]">DS</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Derrick Serrer</h3>
                  <p className="text-primary font-medium mb-3">Founder & President</p>
                  <p className="text-gray-400 leading-relaxed">
                    Visionary leader committed to building transformative, people-first technology solutions that make a
                    real impact. Derrick believes innovation means little without empathy and integrity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 rounded-full copper-gradient mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0A0E14]">PN</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Parviz Nadjafov</h3>
                  <p className="text-primary font-medium mb-3">Director of Development</p>
                  <p className="text-gray-400 leading-relaxed">
                    Technical expert driving innovation and excellence in software architecture, scalability, and
                    reliability. Parviz leads with precision, purpose, and collaboration at the core of every build.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-6 text-center copper-gradient-text">Board of Directors</h2>
              <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
                Fluent Paradigm Technologies is supported by a deeply experienced Board that provides strategic
                guidance, accountability, and balance. Their collective insight ensures every step forward reflects our
                shared commitment to people-first innovation and integrity in leadership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
