import Image from "next/image"
import { Check } from "lucide-react"

export default function WatchSection() {
  return (
    <div id="watch" className="container mx-auto font-semibold px-4 py-8 md:py-12 lg:py-16">
      <div className="flex md:grid flex-col-reverse justify-center md:flex-row gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-4">
          <Image
            src="https://www.hevyapp.com/wp-content/uploads/img-1-1.png"
            width={400}
            height={600}
            alt="Apple Watch and WearOS devices"
            className="mx-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apple Watch & WearOS</h2>
          <p className="text-black ">
          Leave your phone in the locker room, and track your workouts
            completely from your Apple Watch or WearOS device. Easily sync your
            routines and focus on your workout.
          </p>
          <ul className="grid gap-4">
            {["Simple Interface", "Sync App Routines", "Workout Offline"].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className=" h-5 md:h-6 w-5 md:w-6 text-black" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-normal">
            Get our Hevy{" "}
            <a href="#" className="text-blue-500 hover:underline">
              custom Apple Watch faces
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}