import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center h-full">
          <Image src="/jose_logo2.png" alt="JBZ Construction Logo" width={300} height={96} className="w-auto h-full object-contain" priority />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-accent-500 transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-accent-500 transition-colors">Gallery</Link>
          <Link href="/reviews" className="hover:text-accent-500 transition-colors">Reviews</Link>
          <Link href="/about" className="hover:text-accent-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-accent-500 transition-colors hidden lg:inline-flex">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:919-593-7364" className="hidden lg:flex items-center gap-2 text-primary-900 font-bold hover:text-accent-500 transition-colors">
            <Phone size={18} />
            <span>(919) 593-7364</span>
          </a>
          <Link href="/contact" className="hidden sm:inline-flex bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm">
            Book Now
          </Link>
          <button className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
