import Image from "next/image"
import { Check } from "lucide-react"

export default function Workout() {
  return (
    <div className="container mx-auto font-semibold px-4 py-8 md:py-12 lg:py-16">
      <div className="flex md:grid flex-col-reverse justify-center md:flex-row gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-4">
          <Image
            src="https://www.hevyapp.com/wp-content/uploads/image-3-3.png"
            width={400}
            height={600}
            alt="Workout tracker app interface"
            className="mx-auto rounded-3xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Log workouts</h2>
          <p className="text-black ">
            A workout tracker that just works. Everything you need to log your workouts and smash your goals.
          </p>
          <ul className="grid gap-4">
            {[
              "Intuitive Workout Logging",
              "Advanced Routine Planner",
              "Mark Warmup, Drop and Failure Sets",
              "Automatic Rest Timers",
              "Add Exercise Notes",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className=" h-5 md:h-6 w-5 md:w-6 text-black" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}