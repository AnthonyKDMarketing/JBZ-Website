"use client";
import Link from "next/link";
import servicesData from "@/data/services.json";
import { ArrowRight, Home, Hammer, LayoutGrid } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={40} className="text-accent-500" />,
  Hammer: <Hammer size={40} className="text-accent-500" />,
  LayoutGrid: <LayoutGrid size={40} className="text-accent-500" />,
};

export default function ServiceCards() {
  return (
    <section className="pt-24 pb-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed">
            We deliver exceptional craftsmanship in exterior renovations, tailored directly to the climate and aesthetics of the NC Triangle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow group flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary-50 rounded-2xl group-hover:bg-primary-100 transition-colors shrink-0">
                  <LayoutGrid size={40} className="text-accent-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">{service.title.rendered}</h3>
              </div>
              <p className="text-slate-600 mb-6">{service.excerpt.rendered}</p>
              
              <div className="mb-8 flex-1">
                <p className="text-sm text-slate-700 line-clamp-3 leading-relaxed">{service.basic_details}</p>
              </div>
              
              <Link href="/services" className="inline-flex items-center gap-2 text-primary-900 font-bold group-hover:text-accent-500 transition-colors mt-auto pt-4 border-t border-slate-100">
                Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-md font-bold text-lg transition-colors shadow-sm">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
