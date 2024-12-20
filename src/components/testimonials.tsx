import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    content: "IsValid has completely transformed our product authentication process. The QR codes are easy to use and provide our customers with instant peace of mind.",
    author: "Mohan Panday",
    role: "Operations Manager",
    rating: 5
  },
  {
    content: "The blockchain-powered security gives us confidence that our products are protected against counterfeiting. Highly recommend IsValid!",
    author: "Prasanjit",
    role: "Supply Chain Director",
    rating: 4
  },
  {
    content: "The transparency and end-to-end tracking provided by IsValid have been game-changers for our business. Our customers love the easy verification process.",
    author: "Rohit",
    role: "Brand Manager",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="container px-4 py-24">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
        What Our Customers Say
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="bg-gradient-to-br from-gray-100 to-gray-200">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

