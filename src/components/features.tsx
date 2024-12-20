import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, LaptopMinimal, ChartSpline, Lock } from 'lucide-react';

const features = [
  {
    title: 'Anti-Counterfeiting Technology',
    description: 'Prevents duplication with tamper-proof systems to ensure authenticity and trust.',
    icon: <Lock />
  },
  // {
  //   title: 'Blockchain-Powered Security',
  //   description: 'Ensures data integrity and traceability through secure blockchain systems.',
  //   icon: '🔗'
  // },
  {
    title: 'Transparency for Consumers',
    description: 'Allows instant verification of authenticity through quick QR code scanning.',
    icon: <Search />
  },
  {
    title: 'End-to-End Tracking',
    description: 'Provides complete visibility at every stage of the product journey.',
    icon: <LaptopMinimal />
  },
  {
    title: 'Scalable Solutions',
    description: 'Designed to meet the needs of businesses of all sizes and industries.',
    icon: <ChartSpline />
  }
]

export function Features() {
  return (
    <section className="container px-4 py-24">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
        How does IsValid work?
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-6 text-5xl">{feature.icon}</div>
              <CardTitle className='text-2xl'>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

