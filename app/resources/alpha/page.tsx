import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResourceGrid, type ResourceItem } from "@/components/resource-grid"

export const metadata: Metadata = {
  title: "Alpha Resources | Middleton MAO",
  description: "Study materials and practice problems for the Alpha division (Calculus).",
}

const resources: ResourceItem[] = [
  { title: "Precalculus Test Standards", description: "Official Precalculus standards for the Alpha division", icon: "pdf", type: "PDF", href: "/resources/precalculus-test-standards.pdf" },
  { title: "Khan Academy: Precalculus", description: "Core lessons and practice for Alpha topics", icon: "link", type: "Course", href: "https://www.khanacademy.org/math/precalculus" },
  { title: "FAMAT Precalculus Study Guide", description: "Comprehensive guide for Alpha preparation", icon: "guide", type: "Guide", href: "https://famat.org/static/study-guides/FAMAT_Precalc_Study_Guide.pdf" },
  { title: "Rotating Conics", description: "Review the final section on conic sections", icon: "guide", type: "Lesson", href: "https://math.libretexts.org/Bookshelves/Calculus/Calculus_(OpenStax)/11%3A_Parametric_Equations_and_Polar_Coordinates/11.05%3A_Conic_Sections" },
  { title: "AMC 10/12 Resources", description: "Develop problem-solving skills with AMC practice", icon: "practice", type: "Practice", href: "/resources/amc-10-12" },
  { title: "Current Regional Tests", description: "FAMAT regular-season tests from 2022 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1XZ5ONbA2er3-THNmHVK7MIPxEx36lBbv" },
  { title: "FAMAT Regional Test Bank", description: "Archive of regional tests from prior years", icon: "download", type: "Test Bank", href: "https://tests.famat.org/" },
  { title: "FAMAT State Test Bank", description: "State Convention tests from 2016 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1rA1JfpTmLsS68hx1TALNZ22LbFKc5yFg?usp=sharing" },
]

export default function AlphaResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Alpha Division"
        title="Alpha Resources"
        description="The study guide and Khan Academy cover most Alpha content. Strong problem-solving ability is especially important, so regular AMC 12 practice is recommended."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>
    </main>
  )
}
