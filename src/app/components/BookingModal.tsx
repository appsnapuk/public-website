'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { bookDemo } from "../actions/bookDemo"
interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        const result = await bookDemo(formData)

        setIsSubmitting(false)
        if (result.success) {
            setIsSuccess(true)
            setTimeout(() => {
                onClose()
                setIsSuccess(false)
            }, 10000)
        } else {
            // Handle error
            console.error('Failed to book demo:', result.error)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book a Demo</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to book a demo of our booking and POS systems.
                    </DialogDescription>
                </DialogHeader>
                {isSuccess ? (
                    <div className="text-center text-green-600">
                        Thank you for booking a demo! We&apos;ll be in touch soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                        <div>
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" name="company" required />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Book Demo'}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}

