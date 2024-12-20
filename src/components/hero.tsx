import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8">
          <div className='flex gap-6'>
            <div className="flex items-center gap-1">
              {/* {[...Array(5)].map((_, index) => ( */}
              <Avatar className='-ml-2 first:ml-0 h-12 w-12 ring-1 ring-offset-2 ring-muted-foreground/40' key="1">
                <AvatarImage src={`https://framerusercontent.com/images/KpkqmmPib5RCYXU7McHKingNvg.jpeg?scale-down-to=512`} alt={`@shadcn$"1"`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className='-ml-2 first:ml-0 h-12 w-12 ring-1 ring-offset-2 ring-muted-foreground/40' key="2">
                <AvatarImage src={`https://framerusercontent.com/images/B63svdJMpER8G3bfmcvohfTbD2Q.jpeg?scale-down-to=512`} alt={`@shadcn$"1"`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className='-ml-2 first:ml-0 h-12 w-12 ring-1 ring-offset-2 ring-muted-foreground/40' key="3">
                <AvatarImage src={`https://framerusercontent.com/images/CYpa2bIq6fcE2zBGng9ZNGXrvnQ.jpeg?scale-down-to=512`} alt={`@shadcn$"1"`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className='-ml-2 first:ml-0 h-12 w-12 ring-1 ring-offset-2 ring-muted-foreground/40' key="4">
                <AvatarImage src={`https://framerusercontent.com/images/cLsyTaR6USmTc5lOGbuUDJRpTOw.jpeg?scale-down-to=512`} alt={`@shadcn$"1"`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className='-ml-2 first:ml-0 h-12 w-12 ring-1 ring-offset-2 ring-muted-foreground/40' key="5">
                <AvatarImage src={`https://framerusercontent.com/images/sv6BYy71BzCYD6BlJPGCGii56M.jpeg?scale-down-to=512`} alt={`@shadcn$"1"`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* ))} */}
            </div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                100+ Brands joined
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
            Sheid your Brand
          </h1>
          <p className="text-xl text-muted-foreground">
            Empower your products with tamper
            proof authenticity using super-power QR codes.
          </p>
          <div className="flex gap-4">
            <a href="https://cal.com/siddharth-vyyrsa/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">Book a Call</Button>
            </a>
          </div>

        </div>
        <div className="relative h-[400px] w-full">
          <Image
            src="/360_F_431661651_haC0ldiYzQ5OiZnT3TmgBrUtqAXVpa4M.jpg"
            alt="3D Cube illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section >
  )
}