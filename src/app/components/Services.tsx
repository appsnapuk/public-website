import { Calendar, DollarSign, Users } from 'lucide-react'

const services = [
  {
    name: 'Booking System',
    description: 'Streamline reservations and manage capacity with our intuitive booking system.',
    icon: Calendar,
  },
  {
    name: 'POS System',
    description: 'Efficiently process transactions and track sales with our robust POS solution.',
    icon: DollarSign,
  },
  {
    name: 'Customer Management',
    description: 'Build lasting relationships with integrated customer management tools.',
    icon: Users,
  },
]

export default function Services() {
  return (
    <div className="py-12 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your venue
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive solutions cover all aspects of managing your entertainment venue.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

