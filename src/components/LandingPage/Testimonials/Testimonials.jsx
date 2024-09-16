"use client";
import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";

// You would typically import these in your _app.tsx or layout.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    rating: 5,
    date: "4 days ago",
    title: "Well worth it!",
    comment:
      "I had a hard time keeping track of my workout routine. Writing them down was a chore and I didn't want to be doing it while I'm working out. Glad I can set up my workout routines with just a tap and I love that it keeps track of my stats as well.",
    author: "gbleg3nd",
    verified: true,
  },
  {
    rating: 5,
    date: "2 days ago",
    title: "Love it!",
    comment:
      "I really love this app! It helps me plan and keep track of all my workouts. It also keeps track of my reps and weight, which makes it easier for me to increase it overtime. It's also nice to be able to see other peoples workouts and share your workouts with friends!",
    author: "sashaost",
    verified: true,
  },
  {
    rating: 5,
    date: "11 days ago",
    title: "Best Workout Tracker",
    comment:
      "Used other workout trackers but this one is the absolute best. Very easy to plug in your program routines and start hitting the weights. Also has the unique social aspect which I was skeptical at first but now LOVE it since I can share exactly my workouts that day with just a link to anyone. 100% go with Hevy.",
    author: "Csrgrado",
    verified: true,
  },
  {
    rating: 5,
    date: "15 days ago",
    title: "Game Changer for Fitness",
    comment:
      "This app has revolutionized my workout routine. The interface is intuitive, and the ability to track progress over time is incredibly motivating. Highly recommend to anyone serious about fitness.",
    author: "FitnessFanatic",
    verified: true,
  },
  {
    rating: 4,
    date: "1 month ago",
    title: "Great, but room for improvement",
    comment:
      "Overall, a fantastic app for tracking workouts. The social features are a nice touch. Would love to see more customization options for exercises in future updates.",
    author: "GymGuru101",
    verified: true,
  },
  {
    rating: 5,
    date: "2 months ago",
    title: "Perfect for my needs",
    comment:
      "As a personal trainer, this app has been invaluable for tracking my clients' progress. The ability to share workouts and see real-time updates has greatly improved my coaching efficiency.",
    author: "PTpro",
    verified: true,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='testimonials' className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        More than 5 million athletes are on App Name
      </h2>
      <div className="flex justify-center space-x-4 md:space-x-16 mb-12">
        <div className="text-center">
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-blue-500 fill-current" />
            ))}
          </div>
          <p className="mt-2">4.9 stars - 20k ratings</p>
          <div className="flex items-center justify-center mt-2">
            <span>App Store</span>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-blue-500 fill-current" />
            ))}
          </div>
          <p className="mt-2">4.9 stars - 85k ratings</p>
          <div className="flex items-center justify-center mt-2">
            <span>Google Play</span>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-blue-500 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-500">{testimonial.date}</span>
              </div>
              <h3 className="font-bold mb-2">{testimonial.title}</h3>
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              <div className="flex items-center">
                <span className="font-medium mr-2">
                  by {testimonial.author}
                </span>
                {testimonial.verified && (
                  <span className="text-blue-500 text-sm">✓ Verified</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-8">
        <button className=" py-2 px-4 rounded-3xl border border-blue-600 text-blue-600 hover:scale-[1.06] duration-300">
          See more
        </button>
      </div>
    </div>
  );
}
