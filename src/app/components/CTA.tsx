interface CTAProps {
    openModal: () => void
}

export default function CTA({ openModal }: CTAProps) {
    return (
        <div className="bg-indigo-700" id="contact">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to streamline your venue?</span>
                    <span className="block">Get started today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Book a demo to see how our booking and POS systems can transform your business operations.
                </p>
                <button
                    onClick={openModal}
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                >
                    Book a Demo
                </button>
            </div>
        </div>
    )
}

