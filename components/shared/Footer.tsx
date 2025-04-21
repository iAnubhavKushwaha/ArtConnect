import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t bg-purple-50 text-gray-700">
      <div className="wrapper mx-auto max-w-screen-xl px-5 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Logo + Description */}
          <div className="text-center sm:text-left">
            <Link href="/">
              <Image
                src="/assets/images/ArtConnect-logo.svg"
                alt="ArtConnect Logo"
                width={128}
                height={38}
                className="mx-auto sm:mx-0"
              />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Connecting creativity around the world.
            </p>
          </div>


          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © 2025 ArtConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
