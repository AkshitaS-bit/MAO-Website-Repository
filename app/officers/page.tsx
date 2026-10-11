import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Officers | Middleton MAO",
  description: "Meet the officers who lead the Middleton MAO chapter.",
}

const officers = [
  { role: "President", name: "Shreyes Penugonda", photo: "/officers/shreyes-penugonda.jpg" },
  { role: "President Elect", name: "Navita Mishra", photo: "/officers/navita-mishra.jpg" },
  { role: "Vice President", name: "Ashvik Srivasta", photo: "/officers/ashvik-srivasta.jpg" },
  { role: "Vice President & Mu Lead", name: "Parv Kothari", photo: "/officers/parv-kothari.jpg" },
  { role: "Treasurer", name: "Yashika Garg", photo: "/officers/yashika-garg.jpg" },
  { role: "Historian", name: "Mahaska Subudhi", photo: "/officers/mahaska-subudhi.jpg" },
  { role: "Webmaster", name: "Akshita Sanu", photo: "/officers/akshita-sanu.jpg" },
  { role: "Theta Lead", name: "Aarav Singh", photo: "/officers/aarav-singh.jpg" },
  { role: "Alpha Lead", name: "Siddanth Nidadavolu", photo: "/officers/siddanth-nidadavolu.jpg" },
  { role: "Stat Lead & State Treasurer", name: "Matthew Monteiro", photo: "/officers/matthew-monteiro.jpg" },
]

export default function OfficersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Team"
        title="Our Officers"
        description="Meet the dedicated officers who lead our chapter."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {officers.map((officer, index) => (
              <Reveal key={officer.name} delay={index * 50}>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#6B0000]/30 hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
                  <Image
                    src={officer.photo}
                    alt={officer.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-full border-4 border-[#6B0000] mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-gray-900 text-lg">{officer.name}</h3>
                  <p className="text-[#D4AF37] font-medium text-sm">{officer.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
