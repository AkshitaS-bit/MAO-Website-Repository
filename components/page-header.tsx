interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-[#6B0000] border-b-4 border-[#D4AF37] pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37] mb-3">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 text-balance">{title}</h1>
        <p className="text-lg leading-relaxed text-white/75 max-w-3xl text-pretty">{description}</p>
      </div>
    </section>
  )
}
