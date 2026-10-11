import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const expectations = [
  "Attend all chapter meetings and events",
  "Commit at least one year to your role",
  "Help organize competitions and workshops",
  "Maintain good academic standing",
]

export default function OfficerApplicationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Leadership"
        title="Officer Application"
        description="Ready to lead? Apply for an officer position and help shape the future of our chapter."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Expect</h2>
              <p className="text-gray-600 mb-8">
                Officers are the backbone of Middleton MAO. Leading a division or committee is a rewarding way to give
                back while building real leadership experience.
              </p>
              <div className="space-y-4">
                {expectations.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B0000] shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900">Officer Applications</CardTitle>
                  <CardDescription>Applications are not currently open.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    An officer application form will be posted here when the next application period begins. Please
                    check back for updates.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
