'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: '/brands/amul.jpeg'
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: '/brands/big-muscles.png'
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: '/brands/fit-food.jpeg'
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: '/brands/healthkart.png'
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: '/brands/garden-of-life.jpeg'
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: '/brands/muscle-blaze.png'
    },
    {
        id: 'logo-7',
        description: 'Logo 7',
        image: '/brands/nike.png'
    },
    {
        id: 'logo-8',
        description: 'Logo 8',
        image: '/brands/oziva.png'
    },
];

const Logos = () => {
    return (
        <section className="container py-24">
            <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                <Carousel
                    opts={{ loop: true }}
                    plugins={[AutoScroll({ playOnInit: true })]}
                >
                    <CarouselContent className="ml-0">
                        {logos.map((logo) => (
                            <CarouselItem
                                key={logo.id}
                                className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                            >
                                <div className="mx-10 flex shrink-0 items-center justify-center">
                                    <div>
                                        <img
                                            src={logo.image}
                                            alt={logo.description}
                                            className="h-9 w-auto"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </section>
    );
};

export default Logos;