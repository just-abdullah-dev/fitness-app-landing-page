import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Ready to get started?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* App Name App Column */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">App Name App</h3>
            <p className="text-blue-600 mb-4">For Personal Use</p>
            <p className="mb-4">
              Log your workouts and track your progress on App Name app while
              being part of an amazing community of +2 million gym athletes.
            </p>
            <div className=" flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src="https://www.hevyapp.com/wp-content/uploads/main_image.png"
                  alt="App Name App Screenshots"
                  width={300}
                  height={300}
                  className=""
                />
              </div>
              <div className="flex space-x-4">
                <Image
                  src="https://www.hevyapp.com/wp-content/uploads/download-appstore.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={40}
                />
                <Image
                  src="https://www.hevyapp.com/wp-content/uploads/download-googleplay.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* App Name Coach Column */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">App Name Coach</h3>
            <p className="text-blue-600 mb-4">
              For Personal Trainers and Coaches
            </p>
            <p className="mb-4">
              World class personal trainer software for you to build and assign
              workout programs for your clients, and track their progress.
            </p>
           <div className=' w-full grid place-items-center my-12'>
            <Image
            src='https://www.hevyapp.com/wp-content/uploads/hevy-coach-cta-1-768x456.png'
            width={450}
            height={450}
            className=' aspect-auto'
            alt=' app image ss'
            />
           </div>
            <button className=" w-full py-2 px-4 rounded-lg bg-black text-white hover:opacity-90 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
