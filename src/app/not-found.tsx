import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <Image src="/images/App-Snap-Logo-Small.png" alt="App Snap UK" width={50} height={50} />
            <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-500 text-center mb-8 max-w-md">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    )
}
