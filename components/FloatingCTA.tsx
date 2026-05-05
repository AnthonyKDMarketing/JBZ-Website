"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href="/contact" 
        className="flex items-center gap-2 bg-primary-900 hover:bg-primary-950 text-white px-6 py-4 rounded-full shadow-2xl font-bold transition-all transform hover:scale-105 border-2 border-white/20"
      >
        <CalendarCheck size={20} />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
