"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import services from '@/data/services.json';
import Image from 'next/image';

type Service = typeof services[0];

export default function ServicesHubPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Function to close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedService(null);
    }
  };

  return (
    <div className="pb-12 text-slate-900 relative">
      {/* Hero Section */}
      <header className="bg-primary-900 text-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Our Core Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert exterior renovations, structural repairs, and specialized contracting solutions built explicitly for the North Carolina climate.
          </p>
          <Link href="/contact" className="inline-flex bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-md font-black text-lg transition-colors shadow-lg">
            Book Now
          </Link>
        </div>
      </header>

      {/* Grid of Service Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((svc) => (
              <div 
                key={svc.id} 
                onClick={() => setSelectedService(svc)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col hover:-translate-y-1"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={svc.acf.image_url} 
                    alt={svc.title.rendered} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white tracking-tight">{svc.title.rendered}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-6 flex-1 text-base leading-relaxed">{svc.excerpt.rendered}</p>
                  <span className="text-primary-900 font-bold inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-black mb-12 tracking-tight text-primary-900">Why Apex Homeowners Trust JBZ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="flex flex-col items-center gap-3">
              <CheckCircle2 className="text-accent-500" size={36} />
              <span className="font-bold text-slate-800">Fully Licensed</span>
            </div>
             <div className="flex flex-col items-center gap-3">
              <CheckCircle2 className="text-accent-500" size={36} />
              <span className="font-bold text-slate-800">15+ Yrs Exp</span>
            </div>
             <div className="flex flex-col items-center gap-3">
              <CheckCircle2 className="text-accent-500" size={36} />
              <span className="font-bold text-slate-800">5-Star Rated</span>
            </div>
             <div className="flex flex-col items-center gap-3">
              <CheckCircle2 className="text-accent-500" size={36} />
              <span className="font-bold text-slate-800">Local Experts</span>
            </div>
          </div>
          <p className="text-slate-600 mb-8 text-xl">Ready to start your project with unparalleled craftsmanship?</p>
          <Link href="/contact" className="inline-flex bg-primary-900 hover:bg-primary-950 text-white px-10 py-5 rounded-md font-bold text-lg shadow-xl shadow-primary-900/20 transition-transform hover:-translate-y-1">
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Header Image */}
            <div className="h-64 relative w-full">
               <Image 
                  src={selectedService.acf.image_url} 
                  alt={selectedService.title.rendered} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent/30" />
                <h2 className="absolute bottom-6 left-8 right-8 text-4xl font-black text-white">{selectedService.title.rendered}</h2>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {selectedService.basic_details}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="text-accent-500" size={20} /> Appraisal Process
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedService.appraisal_process}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="text-accent-500" size={20} /> Estimate Delivery
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedService.estimate_delivery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="border-t border-slate-200 pt-8 mt-4 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Transform Your Home?</h3>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-md font-bold text-lg shadow-lg shadow-accent-500/30 transition-all hover:-translate-y-1"
                >
                  Book Your {selectedService.title.rendered} Estimate <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
