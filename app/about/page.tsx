import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "About | Middleton MAO",
  description: "Learn about Mu Alpha Theta and the Middleton High School chapter.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="About Us"
        title="About Our Chapter"
        description="Learn more about Mu Alpha Theta and the Middleton High School chapter."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
              <Reveal>
                <div className="bg-[#6B0000] p-8 sm:p-10 rounded-2xl text-white">
                  <h3 className="text-2xl font-semibold mb-4">What is Mu Alpha Theta?</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Mu Alpha Theta is the National High School and Two-Year College Mathematics Honor Society. Founded
                    in 1957, it has grown to over 100,000 student members in more than 2,200 schools.
                  </p>
                  <p className="text-white/90 leading-relaxed text-lg mt-4">
                    The organization recognizes students who pursue mathematics with curiosity, commitment, and a
                    desire to help others learn. Members connect with a nationwide community that celebrates both
                    academic achievement and the joy of solving a challenging problem.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Middleton Chapter</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The Middleton High School Chapter has been a beacon of mathematical excellence since 2009. We
                    provide students with opportunities to compete in regional and national competitions, participate
                    in tutoring programs, and explore advanced mathematical concepts.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mt-4">
                    Our chapter is a welcoming place for students at every stage of their math journey. Through regular
                    meetings, collaborative practice, and peer support, members build confidence while working toward
                    their individual academic and competition goals.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-[#D4AF37]/10 p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/20">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Achievements</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our members have consistently placed in the top tiers at AMC, MATHCOUNTS, and state-level
                    competitions, earning recognition for both individual and team achievements.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mt-4">
                    These results reflect the time our students devote to learning, practicing, and encouraging one
                    another. We are proud not only of awards and rankings, but also of the resilience, leadership, and
                    enthusiasm our members bring to the larger Middleton community.
                  </p>
                </div>
              </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
