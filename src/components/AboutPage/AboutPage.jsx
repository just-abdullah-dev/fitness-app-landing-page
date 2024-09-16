import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main container */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>

        {/* First paragraph */}
        <p className="md:text-center text-lg text-gray-600 mb-8">
          We are a team of dedicated professionals passionate about delivering
          high-quality services to our clients. Our commitment to excellence and
          innovation drives us to continually improve our offerings and provide
          value in every aspect of our work. With a strong focus on client
          satisfaction, we aim to build long-term partnerships and help
          businesses achieve their goals.
        </p>
        {/* Group photo */}
        <div className="relative w-full mb-4">
          <Image
            src="https://www.hevyapp.com/wp-content/uploads/HevyTeam-768x512.jpg"
            alt="Our Team"
            width={700}
            height={700}
            className=" aspect-auto mx-auto rounded-lg"
          />
        </div>

        {/* Additional paragraphs */}
        <div className="space-y-6">
          <p className="text-gray-700">
            Our team is made up of industry experts with a diverse range of
            skills, all united by a shared vision to push the boundaries of
            what’s possible. We work collaboratively to create solutions that
            are not only effective but also tailored to the unique needs of each
            client. Whether it's developing a cutting-edge web platform,
            crafting a digital marketing strategy, or delivering a flawless user
            experience, our goal is to leave a lasting positive impact.
          </p>
          <p className="text-gray-700">
            We believe that success comes from not just hard work but also
            passion and creativity. That's why we encourage an open, innovative
            environment where everyone can contribute ideas and challenge the
            status quo. This allows us to stay ahead of industry trends and
            continuously refine our methods. Our process involves deep research,
            close collaboration with our clients, and the ability to pivot
            quickly based on feedback and data.
          </p>
          <p className="text-gray-700">
            Looking ahead, we are excited about the opportunities that lie in
            store. With a client-first approach and a passion for pushing
            creative and technical boundaries, we are confident in our ability
            to deliver exceptional results. Whether you're a small business
            looking for personalized service or a large company in need of a
            reliable partner, we're here to help you succeed. Let's achieve
            something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
}
