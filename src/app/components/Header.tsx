import Link from 'next/link'
import { BookOpen, Menu } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="sr-only">App Snap UK</span>
                            <img src="/images/App-Snap-Logo-Small.png" alt="App Snap UK" />
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            <Link href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Services
                            </Link>
                            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Features
                            </Link>
                            <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Link
                            href="#contact"
                            className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Get Started
                        </Link>
                        <button className="lg:hidden">
                            <Menu className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

