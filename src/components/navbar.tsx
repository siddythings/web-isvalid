import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="flex justify-center py-4">
      <nav className="flex items-center justify-between rounded-full bg-gray-100 px-6 py-2 gap-6">
        {/* <Link href="/" className="flex items-center space-x-1">
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5Z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
        </Link> */}
        <Button className="rounded-full bg-black text-white hover:bg-gray-800">
          {/* Register */}
          <svg
            className="h-5 w-5 text-gray-600"
            fill="white"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5Z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
          <span className="text-sm font-medium">IsValid</span>
        </Button>
        <div className="hidden md:flex gap-3">
          <Link href="#" className="hover:text-gray-900 text-muted-foreground text-sm">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-900 text-muted-foreground text-sm">
            Features
          </Link>
          {/* <Link href="#" className="hover:text-gray-900 text-muted-foreground text-sm">
            Pricing
          </Link> */}
          <Link href="#" className="hover:text-gray-900 text-muted-foreground text-sm">
            Contact
          </Link>
        </div>
        {/* <Button className="rounded-full bg-black text-white hover:bg-gray-800">
          Register
        </Button> */}
      </nav>
    </header>
  )
}

