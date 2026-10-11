import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Competitions | Middleton MAO",
  description: "Upcoming math competitions and registration for the Middleton MAO chapter.",
}

const amcDates = [
  { version: "A Versions", date: "November 5, 2026" },
  { version: "B Versions", date: "November 13, 2026" },
]

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Compete"
        title="Upcoming Competitions"
        description="Compete against the best mathematical minds in regional, state, and national competitions."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="text-xl font-semibold text-gray-900">AMC 10/12</h3>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  National
                </Badge>
              </div>
              <p className="text-gray-600 mb-5">The AMC 10/12 competitions for the 2026–2027 cycle are scheduled for:</p>
              <div className="space-y-3">
                {amcDates.map((competition) => (
                  <div key={competition.version} className="flex items-center gap-3 text-gray-600">
                    <Calendar size={16} className="text-[#6B0000] shrink-0" />
                    <span>
                      <span className="font-medium text-gray-900">{competition.version}:</span> {competition.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-5 text-gray-700">
              <p className="font-semibold text-gray-900 mb-1">Additional Competitions</p>
              <p className="text-sm leading-relaxed">
                Additional competitions will be listed here once their details are confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
