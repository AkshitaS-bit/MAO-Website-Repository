import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResourceGrid, type ResourceItem } from "@/components/resource-grid"

export const metadata: Metadata = {
  title: "AMC 10/12 Resources | Middleton MAO",
  description: "Practice resources for AMC 10 and AMC 12 preparation.",
}

const resources: ResourceItem[] = [
  {
    title: "AoPS Competition Books",
    description: "Books covering algebra, number theory, geometry, combinatorics, and more.",
    icon: "guide",
    type: "Library",
    href: "https://drive.google.com/drive/folders/1BCdmj0JGH3m0IuPAH0aORhWwgPjkJs15",
  },
  {
    title: "AMC 10/12 Practice Tests",
    description: "Past AMC 10 and AMC 12 problems and solutions - the most helpful practice resource.",
    icon: "practice",
    type: "Practice",
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions",
  },
  {
    title: "Alcumus Practice",
    description: "Practice contest problems organized by topic and difficulty.",
    icon: "practice",
    type: "Practice",
    href: "https://artofproblemsolving.com/alcumus",
  },
  {
    title: "The Art and Craft of Problem Solving",
    description: "A problem-solving textbook by Paul Zeitz.",
    icon: "pdf",
    type: "Textbook",
    href: "https://kheavan.wordpress.com/wp-content/uploads/2010/06/paul-zeitz-author-the-art-and-craft-of-problem-solving-2edwiley20060471789011.pdf",
  },
]

export default function AmcResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Contest Preparation"
        title="AMC 10/12 Resources"
        description="Develop problem-solving ability with past AMC tests, topic-based practice, competition books, and a dedicated problem-solving textbook."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} />
        </div>
      </section>
    </main>
  )
}
