type Props = { title: string; subtitle?: string }

export default function SectionHead({ title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
