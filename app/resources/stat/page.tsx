import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResourceGrid, type ResourceItem } from "@/components/resource-grid"

export const metadata: Metadata = {
  title: "Statistics Resources | Middleton MAO",
  description: "Study materials and practice problems for the Statistics division.",
}

const resources: ResourceItem[] = [
  { title: "FAMAT Statistics Test Standards", description: "Official topic standards for the Statistics division", icon: "pdf", type: "Standards", href: "https://famat.org/downloads/Stats%20Test%20Standards.pdf" },
  { title: "Khan Academy AP Statistics", description: "Lessons and practice for AP Statistics concepts", icon: "guide", type: "Course", href: "https://www.khanacademy.org/math/ap-statistics" },
  { title: "ACE AP Statistics", description: "AP Statistics textbook and practice materials", icon: "guide", type: "Study Guide", href: "https://tmasacademy.com/books/ace-ap-statistics" },
  { title: "Probability Theory Modules", description: "LibreTexts supplemental lessons on probability theory", icon: "link", type: "Reference", href: "https://stats.libretexts.org/Bookshelves/Probability_Theory/Supplemental_Modules_(Probability)" },
  { title: "Introductory Statistics", description: "LibreTexts textbook covering introductory statistics", icon: "link", type: "Reference", href: "https://stats.libretexts.org/Bookshelves/Introductory_Statistics" },
  { title: "Current Regional Tests", description: "FAMAT regular-season tests from 2022 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1XZ5ONbA2er3-THNmHVK7MIPxEx36lBbv" },
  { title: "FAMAT Regional Test Bank", description: "Archive of regional tests from prior years", icon: "download", type: "Test Bank", href: "https://tests.famat.org/" },
  { title: "FAMAT State Test Bank", description: "State Convention tests from 2016 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1rA1JfpTmLsS68hx1TALNZ22LbFKc5yFg?usp=sharing" },
]

export default function StatResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Statistics Division"
        title="Statistics Resources"
        description="Materials for the Statistics division, covering probability, data analysis, and inference."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>
    </main>
  )
}
