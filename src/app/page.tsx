'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Hero />
                <Services />
                <Features />
                <CTA openModal={openModal} />
            </main>
            <Footer />
            <BookingModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}