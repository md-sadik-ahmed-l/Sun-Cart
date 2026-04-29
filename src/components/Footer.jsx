import Image from "next/image";
import Link from "next/link";

import Facebook from "../assets/img/Facebook.png";
import Instagram from "../assets/img/Instagram.png";
import Twitter from "../assets/img/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white px-5 md:px-10 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

         
          <div className="space-y-3">
            <h2 className="font-bold text-3xl md:text-4xl">SunCart</h2>
            <p className="text-gray-300 text-sm md:text-base">
              Build amazing experiences with our modern app platform.
            </p>
          </div>

         
          <div className="space-y-3">
            <h4 className="text-lg md:text-xl font-medium">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-lg md:text-xl font-medium">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <Link href="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h4 className="text-lg md:text-xl font-medium">Social Links</h4>
            <div className="flex space-x-4">
              <Image src={Facebook} alt="Facebook" className="w-8 h-8 hover:scale-110 transition" />
              <Image src={Instagram} alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
              <Image src={Twitter} alt="Twitter" className="w-8 h-8 hover:scale-110 transition" />
            </div>
          </div>

        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-12 pt-6 border-t border-gray-700 text-gray-400 gap-4">

          <p className="text-sm md:text-base">
            © 2026 SunCart. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-4 text-sm md:text-base">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  );
};

export default Footer;