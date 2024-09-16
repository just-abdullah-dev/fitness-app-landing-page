"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Header({ activeNavLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className=" bg-white font-semibold py-4 px-4 md:px-8 flex items-center justify-between ">
      <a href="/" className="flex items-center space-x-2 ">
        {/* <Image src="/placeholder.svg" alt="App Name Logo" width={40} height={40} /> */}
        <span className="text-2xl font-bold">App Name</span>
      </a>
      <div
        className="md:hidden"
        onClick={handleMenuClick}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </div>
      <nav className="hidden md:flex space-x-6">
        <a
          href="/"
          className={`${
            activeNavLink === "" && " text-blue-600"
          } hover:text-blue-600 duration-300 cursor-pointer`}
        >
          Home
        </a>

        <Link
          to="log-workout"
          smooth={true}
          duration={700}
          className={` hover:text-blue-600 duration-300 cursor-pointer`}
        >
          Workout Logs
        </Link>
        <Link
          to="progress"
          smooth={true}
          duration={700}
          className={` hover:text-blue-600 duration-300 cursor-pointer`}
        >
          Progress
        </Link>
        <Link
          to="watch"
          smooth={true}
          duration={700}
          className={` hover:text-blue-600 duration-300 cursor-pointer`}
        >
          On Wrist
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={700}
          className={` hover:text-blue-600 duration-300 cursor-pointer`}
        >
          Testimonials
        </Link>
        <a
          href="/about-us"
          className={`${
            activeNavLink === "about-us" && " text-blue-600"
          } hover:text-blue-600 duration-300 cursor-pointer`}
        >
          About Us
        </a>
      </nav>
      <div
        className={`${
          isMenuOpen ? " top-[56px] z-[2] " : "top-[-21rem]"
        } absolute left-0 w-full p-6 bg-white border-b-2 border-black duration-700 transition-all`}
      >
        <nav className="md:hidden grid gap-6">
          <a
            href="/"
            onClick={handleMenuClick}
            className={`${
              activeNavLink === "" && " text-blue-600"
            } hover:text-blue-600 duration-300 cursor-pointer`}
          >
            Home
          </a>

          <Link
            to="log-workout"
            onClick={handleMenuClick}
            smooth={true}
            duration={700}
            className={` hover:text-blue-600 duration-300 cursor-pointer`}
          >
            Workout Logs
          </Link>
          <Link
            to="progress"
            onClick={handleMenuClick}
            smooth={true}
            duration={700}
            className={` hover:text-blue-600 duration-300 cursor-pointer`}
          >
            Progress
          </Link>
          <Link
            to="watch"
            onClick={handleMenuClick}
            smooth={true}
            duration={700}
            className={` hover:text-blue-600 duration-300 cursor-pointer`}
          >
            On Wrist
          </Link>
          <Link
            to="testimonials"
            onClick={handleMenuClick}
            smooth={true}
            duration={700}
            className={` hover:text-blue-600 duration-300 cursor-pointer`}
          >
            Testimonials
          </Link>
          <a
            href="/about-us"
            onClick={handleMenuClick}
            className={`${
              activeNavLink === "about-us" && " text-blue-600"
            } hover:text-blue-600 duration-300 cursor-pointer`}
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
}
