import Link from "next/link"
import { Instagram } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/officers", label: "Officers" },
  { href: "/calendar", label: "Calendar" },
  { href: "/competitions", label: "Competitions" },
  { href: "/resources/theta", label: "Resources" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#6B0000] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10">
                <img
                  src="/mao-tiger-logo.jpeg"
                  alt="Middleton MAO tiger logo"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <div>
                <span className="font-semibold text-lg block">Middleton MAO</span>
                <span className="text-white/60 text-sm">Mu Alpha Theta Honor Society</span>
              </div>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Inspiring a keen interest in mathematics, developing strong scholarship,
              and promoting the enjoyment of mathematics among high school students.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/middleton.mao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Middleton High School on Instagram"
                className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>Middleton High School</li>
              <li>middletonmao1@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Middleton High School Mu Alpha Theta. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Part of the{" "}
            <a
              href="https://mualphatheta.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              National Mu Alpha Theta
            </a>{" "}
            Organization
          </p>
        </div>
      </div>
    </footer>
  )
}
