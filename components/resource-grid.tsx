import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { FileText, BookOpen, Target, ExternalLink, Download, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  pdf: FileText,
  guide: BookOpen,
  practice: Target,
  link: ExternalLink,
  download: Download,
}

export type ResourceItem = {
  title: string
  description: string
  icon: keyof typeof iconMap
  type: string
  href: string
}

export function ResourceGrid({ resources }: { resources: ResourceItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => {
        const Icon = iconMap[resource.icon] ?? FileText
        const isExternal = resource.href.startsWith("http")
        return (
          <Reveal key={resource.title} delay={index * 50}>
            <a
              href={resource.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="block h-full"
            >
              <div className="h-full bg-white p-6 border border-gray-200 border-l-4 border-l-[#6B0000] hover:bg-stone-50 transition-colors duration-200 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-[#6B0000]/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#6B0000]" />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  {resource.type}
                </Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#6B0000] transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-500 text-sm">{resource.description}</p>
              </div>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
