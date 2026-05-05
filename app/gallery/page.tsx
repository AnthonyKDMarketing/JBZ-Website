import { Metadata } from "next";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Project Gallery | JBZ Construction",
  description: "View our recent siding, carpentry, and window replacement projects in Apex, NC.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See the quality of our work. Browse our recent exterior renovation projects completed in Apex, NC and surrounding areas.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.acf.image_url} 
                  alt={item.acf.alt_text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary-900/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.acf.service_category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-primary-900 mb-2">{item.title.rendered}</h3>
                <p className="text-slate-500 text-sm flex items-center gap-1">
                  Location: <span className="font-medium text-slate-700">{item.acf.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-primary-50 p-12 rounded-xl border border-primary-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Like what you see?</h2>
          <p className="text-slate-600 mb-6">Let's discuss how we can transform your home's exterior.</p>
          <a href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
            Get a Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}
