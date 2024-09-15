import Image from 'next/image'
import { Check } from 'lucide-react'

export default function Progress() {
  return (
    <div className="container mx-auto font-semibold px-4 py-16 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 lg:grid-cols-2 lg:gap-8 items-center justify-around">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Measure your progress</h2>
          <p className="text-black">
            Staying motivated is easier when you can see how far you've come.
          </p>
          <ul className="space-y-3">
            {[
              'Advanced Exercise Charts',
              'Personal Records',
              'Calculate One Rep Max',
              'High Quality Exercise Videos',
              'Create Custom Exercises',
              'Complete Exercise History',
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-5 md:h-6 w-5 md:w-6" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pl-8">
          <div className="">
            <Image
              alt="Fitness app screenshot"
              className="aspect-auto overflow-hidden object-cover object-center"
              height="600"
              src="https://www.hevyapp.com/wp-content/uploads/image-2-3.png"
              width="400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}