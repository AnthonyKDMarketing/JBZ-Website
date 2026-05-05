import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote | JBZ Construction",
  description: "Get a free quote for siding, carpentry, or window replacement in Apex, NC.",
};

export default function ContactPage() {
  return (
    <div className="bg-white pb-24">
      <header className="bg-primary-900 py-16 text-white border-b border-primary-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contact JBZ Construction</h1>
          <p className="text-lg text-primary-100">Ready to start your next exterior project? Reach out today for a free consultation.</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 max-w-6xl mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h2>
          <form className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Doe" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="john@example.com" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
              <select className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white">
                <option>Siding Installation</option>
                <option>Custom Carpentry</option>
                <option>Window Replacement</option>
                <option>Other / Multiple Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea rows={4} className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Tell us a little bit about what you need..."></textarea>
            </div>

            <button type="button" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-md transition-colors">
              Request Free Quote
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Phone</h3>
                  <a href="tel:919-593-7364" className="text-accent-600 hover:underline text-lg">(919) 593-7364</a>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri 8am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Email</h3>
                  <a href="mailto:jbz.nchomes@gmail.com" className="text-accent-600 hover:underline">jbz.nchomes@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Service Area</h3>
                  <p className="text-slate-600">Based in Apex, NC 27502</p>
                  <p className="text-sm text-slate-500 mt-1">Serving Raleigh, Apex, Cary, Fuquay and surrounding areas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64 bg-slate-200 rounded-xl overflow-hidden shadow-sm relative">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              src="https://maps.google.com/maps?q=Apex,NC%2027502&t=&z=10&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
