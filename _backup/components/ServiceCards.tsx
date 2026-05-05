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
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow group">
              <div className="mb-6 p-4 bg-primary-50 inline-block rounded-2xl group-hover:bg-primary-100 transition-colors">
                {iconMap[service.acf.icon_name] || <Home size={40} className="text-accent-500" />}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title.rendered}</h3>
              <p className="text-slate-600 mb-6">{service.excerpt.rendered}</p>
              
              <ul className="space-y-2 mb-8">
                {service.acf.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-primary-800 transition-colors">
                Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
