import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  "Access to exclusive competitions",
  "Study materials and resources",
  "Peer tutoring opportunities",
  "Recognition and awards",
]

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Join Us"
        title="Become a Member"
        description="Join our chapter and unlock competitions, resources, and a community of passionate mathematicians."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join?</h2>
              <p className="text-gray-600 mb-8">
                Membership gives you access to competitions, resources, tutoring opportunities, and a community of
                passionate mathematicians.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit}>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900">Membership Registration</CardTitle>
                  <CardDescription>Complete the form below to register for membership.</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    title="Middleton MAO Membership Registration Form"
                    src="https://form.jotform.com/262144042353043"
                    className="w-full min-h-[720px] border-0"
                  >
                    Your browser does not support embedded forms.
                  </iframe>
                  <p className="mt-4 text-sm text-gray-500">
                    Having trouble viewing the form?{" "}
                    <a
                      href="https://form.jotform.com/262144042353043"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#6B0000] hover:underline"
                    >
                      Open the membership form in a new tab.
                    </a>
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
