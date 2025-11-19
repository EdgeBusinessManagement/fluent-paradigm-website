import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Hero */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">About Us</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building technology around people — not the other way around.
              </p>
            </div>

            {/* Mission / Vision / Values */}
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

            {/* Core Team + Board */}
            <div className="bg-card border border-border rounded-lg p-12 mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center copper-gradient-text">Our Team</h2>

              {/* Row 1: Derrick & Parviz & Jasmine & Alisha */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Derrick */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/derrick.jpg"
                      alt="Derrick Serrer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Derrick Serrer</h3>
                  <p className="text-primary font-medium mb-3">Founder &amp; President</p>
                  <p className="text-gray-400 leading-relaxed">
                    Visionary leader committed to building transformative, people-first technology solutions that
                    make a real impact. Derrick believes innovation means little without empathy and integrity.
                  </p>
                </div>

                {/* Parviz */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/parviz_n.jpg"
                      alt="Parviz Nadjafov"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Parviz Nadjafov</h3>
                  <p className="text-primary font-medium mb-3">Director of Development</p>
                  <p className="text-gray-400 leading-relaxed">
                    Technical expert driving innovation and excellence in software architecture, scalability, and
                    reliability. Parviz leads with precision, purpose, and collaboration at the core of every build.
                  </p>
                </div>

                {/* Jasmine */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/jasmine.jpg"
                      alt="Jasmine Bailey"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Jasmine Bailey</h3>
                  <p className="text-primary font-medium mb-3">Marketing Manager</p>
                  <p className="text-gray-400 leading-relaxed">
                    Jasmine leads our marketing with creativity, clarity, and disciplined strategy. She strengthens relationships through storytelling and ensures our brand reflects integrity.
                  </p>
                </div>

                {/* Alisha */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/alisha.jpg"
                      alt="Alisha Ingalls"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Alisha Ingalls</h3>
                  <p className="text-primary font-medium mb-3">
                    Marketing &amp; Customer Relations Coordinator
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Alisha connects customers with the right people and answers. She keeps partners informed and supported, turning feedback into stronger relationships.
                  </p>
                </div>
              </div>

              {/* Row 2: Luis & James */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Luis */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/luis.jpg"
                      alt="Luis Escudero"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Luis Escudero</h3>
                  <p className="text-primary font-medium mb-3">
                    Full-Stack Developer &amp; AI Engineer
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Luis builds scalable platforms across the stack with a strong background in AI engineering. He turns complex requirements into reliable, production-ready systems.
                  </p>
                </div>

                {/* James */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary">
                    <Image
                      src="/james.jpg"
                      alt="James Shally"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">James Shally</h3>
                  <p className="text-primary font-medium mb-3">Full-Stack Developer</p>
                  <p className="text-gray-400 leading-relaxed">
                    James crafts clean, maintainable code and smooth end-to-end flows. He transforms product ideas into features that work seamlessly for users.
                  </p>
                </div>
              </div>

              {/* BOARD BLOCK – now shows the FORMER “Our Team” text */}
              <div className="border-t border-border pt-8">
               
                <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto mb-4">

                <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/team.jpg"
                  alt="Fluent Paradigm Team"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
                  Behind every great product is a team of passionate, skilled professionals who bring ideas to life. At
                  Fluent Paradigm, our diverse team includes full-stack developers, backend engineers, DevOps
                  specialists, QA engineers, and a dedicated marketing team — all working together to deliver
                  exceptional solutions.
                </p>
                <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
                  We're also proud to mentor the next generation of tech talent through our internship program, where
                  emerging developers and designers join our team to learn, grow, and contribute to real-world
                  projects. Together, we build technology that matters.
                </p>
              </div>
            </div>

            {/* PHOTO SECTION – now shows the OLD Board text, with NO title */}
            <div className="bg-card border border-border rounded-lg p-12 mb-12">
               <h3 className="text-2xl font-bold mb-4 text-center copper-gradient-text">
                  Board of Directors
                </h3>

              <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
                Fluent Paradigm Technologies is supported by a deeply experienced Board that provides strategic
                guidance, accountability, and balance. Their collective insight ensures every step forward reflects
                our shared commitment to people-first innovation and integrity in leadership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
