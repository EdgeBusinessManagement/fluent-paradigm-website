import Link from "next/link"
import { Linkedin, Github, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2 copper-gradient-text">Fluent Paradigm Technologies</div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Fluent Paradigm Technologies Inc. — Innovation with Integrity.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com/company/fluent-paradigm-technologies-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
