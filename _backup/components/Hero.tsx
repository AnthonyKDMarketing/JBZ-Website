import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden py-12 lg:py-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541888081622-1d5bbc31e9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Home construction in Apex NC" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-white backdrop-blur-sm">
              <MapPin size={16} />
              <span>Serving Apex, NC & 25-Mile Radius</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Premium Siding, Carpentry & Window Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Enhance the beauty, value, and energy efficiency of your home with our expert exterior renovations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:919-555-0198" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-primary-900 px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Call Now
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-200">
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

          {/* Right Image Placeholder Column */}
          <div className="hidden lg:block relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 shadow-black/50 transform md:hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1175&q=80" 
              alt="Premium house exterior showcasing siding and windows" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
