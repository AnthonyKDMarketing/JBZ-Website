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
            Founded with a commitment to quality and integrity, JBZ Construction has been serving the homeowners of Apex, NC and the surrounding 25-mile radius for over 15 years.
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            We specialize in exterior renovations—from durable James Hardie and vinyl siding to custom deck carpentry and energy-saving window replacements. We treat every home as if it were our own, ensuring meticulous attention to detail and long-lasting results.
          </p>
          <p className="text-slate-700 leading-relaxed text-accent-600 font-medium">
            Our mission is simple: Provide the highest quality materials, unparalleled craftsmanship, and a customer experience that brings peace of mind.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
            alt="JBZ Construction Team on site"
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
