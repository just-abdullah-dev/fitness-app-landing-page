import { Facebook, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">App Name</span>
            </Link>
            <p className="mb-4">Simply the best workout tracking app.</p>
            <div className="flex space-x-4">
              <Link href="#" className="">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-500">Reviews</Link></li>
              <li><Link href="#" className="text-blue-500">Affiliate Program</Link></li>
              <li><Link href="#" className="text-blue-500">Use Cases</Link></li>
              <li><Link href="#" className="text-blue-500">FAQ</Link></li>
              <li><Link href="#" className="text-blue-500">App Name Coach</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-500">About</Link></li>
              <li><Link href="#" className="text-blue-500">Contact Us</Link></li>
              <li><Link href="#" className="text-blue-500">Careers</Link></li>
              <li><Link href="#" className="text-blue-500">Press & Media</Link></li>
              <li><Link href="#" className="text-blue-500">As Seen On</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-500">Blog</Link></li>
              <li><Link href="#" className="text-blue-500">Guides</Link></li>
              <li><Link href="#" className="text-blue-500">Exercise Library</Link></li>
              <li><Link href="#" className="text-blue-500">Compound vs Isolation Exercises</Link></li>
              <li><Link href="#" className="text-blue-500">Public API</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">GUIDES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-500">Best 3 day Workout Splits</Link></li>
              <li><Link href="#" className="text-blue-500">4 day workout Split</Link></li>
              <li><Link href="#" className="text-blue-500">5 day workout Split</Link></li>
              <li><Link href="#" className="text-blue-500">Upper / Lower Split</Link></li>
              <li><Link href="#" className="text-blue-500">Push Pull Legs (PPL)</Link></li>
              <li><Link href="#" className="text-blue-500">Arnold Split Workout</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-700">Terms & Conditions</Link>
              <Link href="#" className="hover:text-gray-700">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-700">Status</Link>
              <Link href="#" className="hover:text-gray-700">Sitemap</Link>
            </div>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              Copyright © 2024 App Name, UK. All rights reserved.
            </p>
          </div>
          {/* <p className="text-sm text-gray-500 mt-4">
            Hevy® is a registered trademark of App Name Studios, S.L. in the United States as well as certain other jurisdictions.
          </p> */}
        </div>
      </div>
    </footer>
  )
}