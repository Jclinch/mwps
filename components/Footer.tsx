import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

// components/Footer.tsx
const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <p className="text-gray-300">
            SUITE J 179, ROAD 5, IKOTA SHOPPING COMPLEX<br />
            VICTORIA GARDEN CITY
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-gray-300 hover:text-amber-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/practice-area" className="text-gray-300 hover:text-amber-500">
                Practice Area
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-amber-500">
                Contact
              </Link>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 mt-6">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://wa.me/your-whatsapp-number"
              className="text-gray-300 hover:text-amber-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/your-instagram-handle"
              className="text-gray-300 hover:text-amber-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@your-tiktok-handle"
              className="text-gray-300 hover:text-amber-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={24} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <p className="text-gray-300">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: By Appointment<br />
            Sunday: Closed
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Milkyway & Prime Solicitors. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
