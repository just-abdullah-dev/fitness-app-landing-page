"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-white font-semibold">
      <header className=" py-2 px-4 md:px-8 flex items-center justify-between ">
        <Link href="/" className="flex items-center space-x-2 ">
          {/* <Image src="/placeholder.svg" alt="Hevy Logo" width={40} height={40} /> */}
          <span className="text-2xl font-bold">App Name</span>
        </Link>
        <div
          className="md:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-600 duration-300"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-gray-600 hover:text-blue-600 duration-300"
          >
            Product
          </Link>
          <Link
            href="/articles"
            className="text-gray-600 hover:text-blue-600 duration-300"
          >
            Articles
          </Link>
          <Link
            href="/coach"
            className="text-gray-600 hover:text-blue-600 duration-300"
          >
            Hevy Coach
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 duration-300"
          >
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-600 hover:text-blue-600 duration-300"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-3xl hover:bg-opacity-90 duration-300"
          >
            Sign Up
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? " top-[56px] z-[2] " : "top-[-21rem]"
          } absolute w-full p-6 bg-white border-b-2 border-black duration-700 transition-all`}
        >
          <nav className="md:hidden grid gap-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-600 duration-300"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-gray-600 hover:text-blue-600 duration-300"
            >
              Product
            </Link>
            <Link
              href="/articles"
              className="text-gray-600 hover:text-blue-600 duration-300"
            >
              Articles
            </Link>
            <Link
              href="/coach"
              className="text-gray-600 hover:text-blue-600 duration-300"
            >
              Hevy Coach
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 duration-300"
            >
              About Us
            </Link>
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-blue-600 duration-300"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-3xl hover:bg-opacity-90 duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <div className=" px-4 sm:px-6 lg:px-8 ">
        {" "}
        {/* Added container with max width and padding */}
        <main className="py-6 md:py-12 px-0 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Log Workouts
              <br />
              <span className="text-blue-600">Get Stronger</span>
              <br />
              Stay Motivated
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-normal">
              Hevy is a free workout tracker for iOS and Android.
              <br />
              Build routines and track progress with friends.
            </p>
            <div className="flex space-x-4 mb-8">
              <Link href="https://apps.apple.com/app/apple-store/id1451707348">
                <Image
                  src="https://www.hevyapp.com/wp-content/uploads/download-appstore.svg"
                  className=" aspect-auto"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.hevy.app">
                <Image
                  src="https://www.hevyapp.com/wp-content/uploads/download-googleplay.svg"
                  className=" aspect-auto"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="https://www.hevyapp.com/wp-content/uploads/users.jpg"
                alt="User avatars"
                width={80}
                height={30}
                className="rounded-full"
              />
              <p className="text-sm text-gray-600">
                The #1 workout tracker. Loved by 5+ million athletes
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                4.9 App Store & 4.9 Google Play (105,000+ ratings)
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="https://www.hevyapp.com/wp-content/uploads/main_image-2-768x842.png"
              alt="Hevy app screenshots"
              width={500}
              height={400}
              className="rounded-lg shadow-xl aspect-auto"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
