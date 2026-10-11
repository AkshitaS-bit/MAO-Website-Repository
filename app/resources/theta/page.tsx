import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResourceGrid, type ResourceItem } from "@/components/resource-grid"

export const metadata: Metadata = {
  title: "Theta Resources | Middleton MAO",
  description: "Study materials and practice problems for the Theta division (Precalculus and below).",
}

const resources: ResourceItem[] = [
  { title: "Algebra II Test Standards", description: "Official Algebra II standards for the Theta division", icon: "pdf", type: "PDF", href: "/resources/algebra-ii-test-standards.pdf" },
  { title: "Geometry Test Standards", description: "Official Geometry standards for the Theta division", icon: "pdf", type: "PDF", href: "https://famat.org/downloads/Geometry%20Test%20Standards.pdf" },
  { title: "Khan Academy: Geometry", description: "Review foundational geometry topics", icon: "link", type: "Course", href: "https://www.khanacademy.org/math/geometry" },
  { title: "Khan Academy: Algebra II", description: "Practice Algebra II concepts and skills", icon: "link", type: "Course", href: "https://www.khanacademy.org/math/algebra2" },
  { title: "FAMAT Geometry Study Guide", description: "Geometry-focused competition study guide", icon: "guide", type: "Guide", href: "https://famat.org/static/study-guides/FAMAT_Geometry_Study_Guide.pdf" },
  { title: "FAMAT Algebra II Study Guide", description: "Algebra II-focused competition study guide", icon: "guide", type: "Guide", href: "https://famat.org/static/study-guides/FAMAT_Algebra_2_Study_Guide.pdf" },
  { title: "Alcumus Geometry Practice", description: "Use Alcumus and filter for Geometry questions", icon: "practice", type: "Practice", href: "https://artofproblemsolving.com/alcumus" },
  { title: "Current Regional Tests", description: "FAMAT regular-season tests from 2022 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1XZ5ONbA2er3-THNmHVK7MIPxEx36lBbv" },
  { title: "FAMAT Regional Test Bank", description: "Archive of regional tests from prior years", icon: "download", type: "Test Bank", href: "https://tests.famat.org/" },
  { title: "FAMAT State Test Bank", description: "State Convention tests from 2016 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1rA1JfpTmLsS68hx1TALNZ22LbFKc5yFg?usp=sharing" },
]

export default function ThetaResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Theta Division"
        title="Theta Resources"
        description="Theta covers Geometry and Algebra II. Use the standards, Khan Academy courses, study guides, and Geometry practice resources below."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>
    </main>
  )
}
