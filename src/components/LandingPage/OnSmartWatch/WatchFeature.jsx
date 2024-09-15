import Image from "next/image";
import { Check } from "lucide-react";

export default function WatchFeature() {
  return (
    <div className=" container mx-auto px-4 md:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row font-semibold items-center justify-between p-0 md:p-10 m-0 md:ml-6 w-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Apple Watch & WearOS</h2>
          <p className=" mb-6 pr-6">
            Leave your phone in the locker room, and track your workouts
            completely from your Apple Watch or WearOS device. Easily sync your
            routines and focus on your workout.
          </p>
          <ul className="space-y-2">
            {["Simple Interface", "Sync App Routines", "Workout Offline"].map(
              (feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 h-5 md:h-6 w-5 md:w-6" />
                  <span>{feature}</span>
                </li>
              )
            )}
          </ul>
          <p className="mt-6 font-normal">
            Get our Hevy{" "}
            <a href="#" className="text-blue-500 hover:underline">
              custom Apple Watch faces
            </a>
            .
          </p>
        </div>
        <div className="md:w-1/2 lg:pl-8 ">
          <Image
            src="https://www.hevyapp.com/wp-content/uploads/img-1-1.png"
            alt="Apple Watch and WearOS devices"
            width={450}
            height={400}
            className=" aspect-auto"
          />
        </div>
      </div>
    </div>
  );
}
