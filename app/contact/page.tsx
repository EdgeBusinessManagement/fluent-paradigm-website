"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Mail, Phone, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 copper-gradient-text">Contact</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">Let's build something meaningful together.</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Whether you're exploring a partnership, an investment opportunity, a project, or a career with us, we'd
                love to hear from you. Every great collaboration — and every great company — begins with a conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg copper-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0A0E14]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-gray-400">
                        11319 280th Street
                        <br />
                        Maple Ridge, BC, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg copper-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0A0E14]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@fluentparadigm.com" className="text-primary hover:underline">
                        info@fluentparadigm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg copper-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0A0E14]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <a href="tel:+17787895143" className="text-primary hover:underline">
                        +1 778 789 5143
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  <Button type="submit" className="w-full copper-gradient text-[#0A0E14] font-bold hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="bg-card border border-primary rounded-lg p-12 text-center">
              <div className="w-20 h-20 rounded-lg copper-gradient flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-[#0A0E14]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 copper-gradient-text">Investor Relations</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                We believe that lasting growth happens when technology and humanity move in the same direction. Fluent
                Paradigm partners with investors who share our people-first values — those who see integrity,
                collaboration, and innovation as inseparable.
              </p>
              <p className="text-gray-400 mb-6">
                If you're interested in supporting the growth of Fluent Paradigm Technologies or exploring strategic
                collaboration, reach out to our leadership team.
              </p>
              <a
                href="mailto:invest@fluentparadigm.com"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-lg"
              >
                <Mail className="w-5 h-5" />
                invest@fluentparadigm.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
