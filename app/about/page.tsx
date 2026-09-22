import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | JBZ Construction",
  description: "Learn about JBZ Construction, the top-rated local contractor in Apex, NC.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pb-24">
      <header className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6">About JBZ Construction</h1>
          <p className="text-xl text-slate-600">Building trust through exceptional craftsmanship in the Carolina Triangle.</p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            JBZ Home Restoration & Renovations, LLC is a trusted remodeling and home improvement contractor servicing Cary, Raleigh, Apex, Holly springs, Fuquay- Varina, Garner, and surrounding areas.
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            We specialize in interior and exterior painting, siding installation and replacement, deck staining, fencing, chimney siding repairs, and general home renovations.
          </p>
          <p className="text-slate-700 leading-relaxed text-accent-600 font-medium">
            Our team is committed to quality craftsmanship, honest communication, and exceptional customer service. Whether you need repairs, remodeling, or complete home improvements, we provide reliable, professional service and free estimates to help bring your vision to life.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/owner-jobsite.jpg" 
            alt="JBZ Owner on the job site working on chimney siding"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-24">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
            <p className="text-sm text-slate-600">We understand NC weather and recommend materials that last.</p>
          </div>
          <div className="p-6 bg-white rounded border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="font-bold text-lg mb-2">Fully Licensed</h3>
            <p className="text-sm text-slate-600">Licensed, bonded, and insured for your complete protection.</p>
          </div>
          <div className="p-6 bg-white rounded border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
            <p className="text-sm text-slate-600">No hidden fees or surprises. Detailed, upfront estimates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
