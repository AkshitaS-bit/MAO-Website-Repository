import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { ArrowRight } from "lucide-react"

const highlights = [
  { title: "Competition Prep", description: "Practice sessions and problem-solving strategies" },
  { title: "Math Community", description: "Meet students who enjoy learning math" },
  { title: "Peer Support", description: "Study together and help one another grow" },
  { title: "Opportunities", description: "Competitions, tutoring, and leadership roles" },
]

const explore = [
  { href: "/about", label: "About Us", desc: "Who we are and what we do" },
  { href: "/officers", label: "Officers", desc: "Meet our chapter officers" },
  { href: "/calendar", label: "Calendar", desc: "Meetings, events & key dates" },
  { href: "/competitions", label: "Competitions", desc: "Upcoming events & registration" },
  { href: "/resources/theta", label: "Resources", desc: "Study guides & practice tests" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#5a0000]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/mao-team-hero.jpeg")' }} />
        <div className="absolute inset-0 bg-[#5a0000]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight text-balance">
                Mu Alpha Theta
                <span className="block text-[#D4AF37] mt-2">Honor Society</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 mb-4 font-light">Where Math Meets Excellence</p>
              <p className="text-base text-white/60 max-w-lg mb-8 leading-relaxed">
                Dedicated to inspiring a keen interest in mathematics, developing strong scholarship, and promoting the enjoyment of mathematics among high school students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#e5c04a] font-semibold text-base px-8">
                  <Link href="/join">Join Our Chapter <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold text-base px-8 transition-all hover:border-white/50">
                  <Link href="/competitions">View Competitions</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-l border-white/30 pl-6">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="border-t border-white/30 pt-3">
                  <h2 className="text-lg font-semibold text-white mb-2">{highlight.title}</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37] mb-3">Explore</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Discover Our Chapter</h2>
            <p className="text-gray-600 max-w-2xl">Everything you need to get involved, prepare, and stay connected.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {explore.map((item, index) => (
              <Reveal key={item.href} delay={index * 40}>
                <Link href={item.href} className="group flex flex-col min-h-44 p-6 border-r border-b border-gray-200 hover:bg-stone-50 transition-colors duration-200">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#6B0000] transition-colors">{item.label}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{item.desc}</p>
                  <span className="inline-flex items-center text-[#6B0000] text-sm font-medium">Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#6B0000] rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">Ready to Join Middleton MAO?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">Become part of a community that celebrates mathematical excellence, competition, and collaboration.</p>
            <Button asChild size="lg" className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#e5c04a] font-semibold text-base px-8">
              <Link href="/join">Join Our Chapter <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
