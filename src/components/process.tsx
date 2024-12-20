import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScanLine, QrCode, ChartNoAxesGantt } from 'lucide-react';
const processes = [
  {
    title: 'Brands Register Their Products',
    description: 'Businesses start by creating a secure product database within IsValid’s platform. Each product is logged with unique details, ensuring a robust foundation for authenticity verification.',
    icon: <ChartNoAxesGantt />
  },
  {
    title: 'Generate Unique QR Codes',
    description: 'IsValid generates a blockchain-secured QR code for every registered product. These codes are tamper-proof and can be easily integrated into packaging or labels.',
    icon: <QrCode />
  },
  {
    title: 'Consumers Scan to Verify',
    description: 'Customers use their smartphones to scan the QR code on the product. This instantly verifies the item’s authenticity, providing peace of mind and building trust in the brand.',
    icon: <ScanLine />
  }
]

export function Process() {
  return (
    <section className="container px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
          Authenticate in 3 Easy Steps
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {processes.map((process) => (
          <Card key={process.title}>
            <CardHeader>
              <div className="mb-6 text-5xl">{process.icon}</div>
              <CardTitle className='text-2xl'>{process.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{process.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}