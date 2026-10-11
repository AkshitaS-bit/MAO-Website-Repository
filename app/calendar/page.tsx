import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Calendar | Middleton MAO",
  description: "Upcoming meetings, events, and important dates for the Middleton MAO chapter.",
}

const monthLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const events = Array.from({ length: 15 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 7, 24 + index * 7))

  return {
    month: monthLabels[date.getUTCMonth()],
    day: String(date.getUTCDate()).padStart(2, "0"),
    title: index === 0 ? "Interest Meeting" : "Chapter Meeting",
    time: "2:30 PM - 3:30 PM",
    type: "Meeting",
  }
})

const typeStyles: Record<string, string> = {
  Meeting: "bg-blue-100 text-blue-700",
  Workshop: "bg-purple-100 text-purple-700",
  Event: "bg-[#D4AF37]/20 text-[#8a6d1b]",
  Practice: "bg-green-100 text-green-700",
  Competition: "bg-[#6B0000]/10 text-[#6B0000]",
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Schedule"
        title="Chapter Calendar"
        description="Stay up to date with our meetings, workshops, competitions, and events throughout the year."
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-5 text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Schedule Notice</p>
            <p className="text-sm leading-relaxed">
              This calendar is tentative and will be updated as meeting dates and event details are confirmed.
            </p>
          </div>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Reveal key={`${event.month}-${event.day}-${event.title}`} delay={index * 60}>
                <div className="flex items-center gap-6 bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#6B0000]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="shrink-0 w-20 h-20 rounded-xl bg-[#6B0000] flex flex-col items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-xs font-medium text-[#D4AF37] tracking-wide">{event.month}</span>
                    <span className="text-2xl font-bold leading-none">{event.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#6B0000] transition-colors">
                        {event.title}
                      </h3>
                      <Badge className={typeStyles[event.type] ?? "bg-gray-100 text-gray-600"}>{event.type}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={15} className="text-[#6B0000]" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
