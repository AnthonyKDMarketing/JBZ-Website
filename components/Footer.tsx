import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="inline-block mb-6 bg-white/10 p-2 rounded-xl">
            <Image src="/jose_logo.jpg" alt="JBZ Construction Logo" width={400} height={150} className="w-auto h-20 md:h-28 object-contain" />
          </Link>
          <p className="mb-4 text-sm">
            Top-rated local contractor in Apex, NC providing expert siding, carpentry, and window replacement services.
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 Main St,<br/>Apex, NC 27502<br/>
            <strong>Service Area:</strong> Within 25 miles
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white transition">Siding Installation & Repair</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Custom Exterior Carpentry</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Energy Efficient Windows</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Project Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition">Customer Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <p className="text-sm font-bold text-white mb-2">
            <a href="tel:919-593-7364" className="hover:text-white transition">(919) 593-7364</a>
          </p>
          <p className="text-sm mb-4">jbz.nchomes@gmail.com</p>
          <Link href="/contact" className="inline-block border border-white text-white hover:bg-white hover:text-slate-950 px-4 py-2 rounded transition-colors text-sm font-medium">
            Request a Quote
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {currentYear} JBZ Construction. All rights reserved.</p>
      </div>
    </footer>
  );
}
