"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

const HERO_IMAGES = [
  "/hero_bg/1.png",
  "/hero_bg/2.png",
  "/hero_bg/3.png",
  "/hero_bg/4.png"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-primary-950 text-white overflow-hidden py-24 lg:py-32 min-h-[600px] flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="JBZ Construction project showcase"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent opacity-95" />
      {/* Mobile-only overlay to ensure text is readable if gradient isn't enough on small screens */}
      <div className="absolute inset-0 z-10 bg-primary-950/50 md:hidden" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-white backdrop-blur-sm">
            <MapPin size={16} />
            <span>Serving Apex, NC & 25-Mile Radius</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-md">
            Premium Siding, Carpentry & Window Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed drop-shadow-sm max-w-2xl">
            Enhance the beauty, value, and energy efficiency of your home with our expert exterior renovations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-black/20">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:919-593-7364" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-primary-900 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-black/20">
              Call Now
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-white" size={24} />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-white" size={24} />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-white" size={24} />
              <span>5-Star Google Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
