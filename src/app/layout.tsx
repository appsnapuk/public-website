import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'App Snap | Booking & POS Systems for Entertainment Venues',
    description: 'App Snap offers powerful booking and POS systems for soft play centers, trampoline parks, and entertainment venues. Streamline operations, enhance customer experience, and boost your business with our innovative software solutions.',
    keywords: [
        'App Snap',
        'booking system',
        'POS system',
        'entertainment venue management',
        'soft play center software',
        'trampoline park management',
        'venue booking',
        'customer management',
        'business operations',
        'ticketing system',
        'capacity management',
        'revenue optimization',
        'family entertainment center',
        'indoor playground software',
        'activity booking',
        'event management',
        'payment processing',
        'real-time analytics',
        'customer loyalty program',
        'staff scheduling',
        'inventory management',
        'multi-location management',
        'online booking',
        'mobile app integration',
        'reporting and analytics',
        'cloud-based solution'
    ],
    authors: [{ name: 'App Snap Team' }],
    creator: 'App Snap',
    publisher: 'App Snap',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.appsnap.co.uk'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'App Snap | Innovative Venue Management Software',
        description: 'Streamline your entertainment venue with App Snap. Our booking and POS systems enhance operations for soft play centers, trampoline parks, and more.',
        url: 'https://www.appsnap.co.uk',
        siteName: 'App Snap',
        images: [
            {
                url: 'https://www.appsnap.co.uk/_next/image?url=%2Fimages%2Fhero.png&w=640&q=75',
                width: 1200,
                height: 630,
                alt: 'App Snap - Venue Management Software',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: 'App Snap | Booking & POS for Entertainment Venues',
    //   description: 'Elevate your venue management with App Snap. Powerful booking and POS systems for entertainment centers.',
    //   creator: '@softplaysolutions',
    //   images: ['https://www.appsnap.co.uk/twitter-image.jpg'],
    // },
    category: 'technology',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}