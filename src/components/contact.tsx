import { Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

export function Contact() {
    return (
        <section className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch with IsValid team</h2>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Have questions or just want to say hi? Send us a message here or you can email us on help@isvalid.co.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Mail className="h-6 w-6" />
                            <a href="mailto:help@isvalid.co" className="text-blue-600 hover:underline">
                                help@isvalid.co
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <form className="space-y-4">
                            <Input className='bg-white' placeholder="Your name" />
                            <Input className='bg-white' type="email" placeholder="Your email" />
                            <Textarea className='bg-white resize-none' rows={4} placeholder='Your message' />
                            <Button type="button" className="w-full bg-black text-white hover:bg-gray-800">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}