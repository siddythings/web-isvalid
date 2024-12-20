import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 sm:flex-row sm:space-y-0">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="font-bold">
                            IsValid
                        </Link>
                        <p className="text-sm text-gray-500">© IsValid {new Date().getFullYear()}</p>
                    </div>
                    <nav className="flex space-x-4 text-sm font-medium text-gray-500">
                        <Link href="/privacy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}