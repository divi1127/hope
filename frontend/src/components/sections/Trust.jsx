import AnimatedSection from '../animations/AnimatedSection'
import StatsCounter from '../animations/StatsCounter'

const stats = [
  { value: 10, suffix: '+', label: 'Years of Care' },
  { value: 1000, suffix: '+', label: 'Recovery Journeys' },
  { value: 24, suffix: '/7', label: 'Support' },
  { value: 100, suffix: '%', label: 'Confidential Environment' },
]

export default function Trust() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-[2.5rem] bg-ink text-white px-8 md:px-12 py-12 md:py-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-gradient font-heading text-4xl md:text-5xl font-bold">
              <StatsCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}