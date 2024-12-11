import { Check } from 'lucide-react'

const tiers = [
    {
        name: 'Starter',
        price: '£99',
        offer: '6 Months Half Price',
        description: 'Perfect for small venues just getting started.',
        setUpFee: '499',
        features: [
            'Basic booking system',
            'Simple POS',
            'Unlimited bookings per month',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: '£199',
        offer: '3 Months Half Price',
        setUpFee: '299',
        description: 'Ideal for growing venues with increased demand.',
        features: [
            'Advanced booking system',
            'Full-featured POS',
            'Priority email & phone support',
            'Customer management tools',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        offer: 'Free consultation and training',
        setUpFee: 'Free',
        description: 'For large venues with complex requirements.',
        features: [
            'Custom booking & POS solutions',
            'Multi-location support',
            'Advanced analytics',
            '24/7 dedicated support',
            'On-site training',
        ],
    },
]

export default function Pricing() {
    return (
        <div className="bg-gray-100 py-24 sm:py-32" id="pricing">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Choose the right plan for your venue
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Whether you&apos;re just starting out or running a large-scale operation, we have a plan that fits your needs.
                </p>
                <div className="mt-16 flex justify-center">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className="rounded-3xl p-8 ring-1 ring-gray-200 bg-white shadow-lg flex flex-col h-full"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{tier.name}</h3>
                                    <p className="mt-4 text-base leading-7 text-gray-600">{tier.description}</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                                        {tier.name !== 'Enterprise' && <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>}
                                    </p>
                                    {tier.offer ? <p className="mt-1 text-sm leading-6 text-gray-500">{tier.offer}</p> : (
                                        <p className="mt-1 text-sm leading-6 text-gray-500 invisible">_</p>
                                    )}
                                    {tier.setUpFee ? (
                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            {tier.setUpFee === 'Free' ? 'No setup fee' : `Setup fee: £${tier.setUpFee}`}
                                        </p>
                                    ) : (
                                        <p className="mt-2 text-sm leading-6 text-gray-500 invisible">_</p>
                                    )}
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto pt-8">
                                    <a
                                        href="#contact"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

