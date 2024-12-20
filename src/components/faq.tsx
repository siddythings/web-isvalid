import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const faqs = [
  {
    question: "What is IsValid?",
    answer: "IsValid is an advanced anti-counterfeiting platform that uses blockchain-secured QR codes to protect products and verify their authenticity."
  },
  {
    question: "Is it easy to implement?",
    answer: "Yes, IsValid is designed for seamless integration. Our QR codes can be easily incorporated into your existing packaging or labels with minimal changes to your production process."
  },
  {
    question: "Do I need technical expertise?",
    answer: "No technical expertise is required. Our platform is user-friendly and we provide full support for implementation. Our team handles all the technical aspects."
  },
  {
    question: "How do customers verify products?",
    answer: "Customers simply scan the QR code with their smartphone camera. They instantly receive verification of the product's authenticity."
  },
  {
    question: "What industries can use IsValid?",
    answer: "IsValid works across all industries, from luxury goods to pharmaceuticals, electronics, and consumer products. Our solution is scalable for businesses of any size."
  },
  {
    question: "How secure is the system?",
    answer: "IsValid uses blockchain technology and encrypted QR codes that cannot be duplicated, ensuring the highest level of security for your products."
  }
];

export function FAQ() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2 relative">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-6">If you have any other questions, please email us.</p>
        <div className="flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:help@isvalid.co" className="block">Contact Us <Mail /></a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://cal.com/siddharth-vyyrsa/30min" className="bg-black text-white hover:bg-gray-800">Book a Call<ArrowRight /></a>
          </Button>
        </div>

        <div className="relative mt-20 h-[200px] w-[200px]">
          <Image
            src="/circles.avif"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className='w-full lg:w-1/2'>
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className='text-lg'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-base text-muted-foreground'>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}