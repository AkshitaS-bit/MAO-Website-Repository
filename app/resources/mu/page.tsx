import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResourceGrid, type ResourceItem } from "@/components/resource-grid"

export const metadata: Metadata = {
  title: "Mu Resources | Middleton MAO",
  description: "Study materials and practice problems for the Mu division (Calculus and beyond).",
}

const resources: ResourceItem[] = [
  { title: "Calculus Test Standards", description: "Official Calculus standards for the Mu division", icon: "pdf", type: "PDF", href: "/resources/calculus-test-standards.pdf" },
  { title: "Khan Academy: AP Calculus BC", description: "Lessons and practice for advanced calculus", icon: "link", type: "Course", href: "https://www.khanacademy.org/math/ap-calculus-bc" },
  { title: "Mu Study Guide", description: "Calculus preparation study guide", icon: "guide", type: "Guide", href: "https://drive.google.com/file/d/1gYgSCnwa1nE2Ozp_LR8Q4Jew51m5FcaS/view" },
  { title: "Integration Handout", description: "University of Florida integration practice handout", icon: "pdf", type: "PDF", href: "https://ums.math.ufl.edu/wp-content/uploads/sites/135/2025/03/Integration_Handout.pdf" },
  { title: "Daily Integral", description: "Daily calculus questions across a range of difficulties", icon: "practice", type: "Practice", href: "https://dailyintegral.com/" },
  { title: "Current Regional Tests", description: "FAMAT regular-season tests from 2022 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1XZ5ONbA2er3-THNmHVK7MIPxEx36lBbv" },
  { title: "FAMAT Regional Test Bank", description: "Archive of regional tests from prior years", icon: "download", type: "Test Bank", href: "https://tests.famat.org/" },
  { title: "FAMAT State Test Bank", description: "State Convention tests from 2016 onward", icon: "download", type: "Test Bank", href: "https://drive.google.com/drive/folders/1rA1JfpTmLsS68hx1TALNZ22LbFKc5yFg?usp=sharing" },
]

export default function MuResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Mu Division"
        title="Mu Resources"
        description="Use these Calculus standards, course materials, study guides, and daily practice resources to prepare for the Mu division."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>
    </main>
  )
}
