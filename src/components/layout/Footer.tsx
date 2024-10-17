import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo, about, quick links, and social media icons */}
        <div className="flex flex-wrap justify-between items-start mb-6">
          {/* Logo and description */}
          <div className="w-full md:w-1/4 mb-4">
            <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-blue-500" />
            <span className="text-2xl font-bold">Space Sell</span>
            </div>
            <p className="text-sm mt-2">
              Space Sell is your go-to platform for buying and selling anything in your local community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-blue-400">About Us</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
              <Link href="/faq" className="hover:text-blue-400">FAQ</Link>
              <Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link>
            </nav>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom section with copyright and additional links */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Space Sell. All Rights Reserved.
          </p>

          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
