import { Metadata } from "next";
import reviewsData from "@/data/reviews.json";
import optionsData from "@/data/options.json";

export const metadata: Metadata = {
  title: "Customer Reviews | JBZ Construction",
  description: "Read what our customers in Apex, NC have to say about our siding, carpentry, and windows services.",
};

export default function ReviewsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": optionsData.acf.site_name,
    "image": "https://images.unsplash.com/photo-1541888081622-1d5bbc31e9c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "@id": "https://jbzconstruction.com",
    "url": "https://jbzconstruction.com",
    "telephone": optionsData.acf.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Apex",
      "addressRegion": "NC",
      "postalCode": "27502",
      "addressCountry": "US"
    },
    "review": reviewsData.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.acf.rating.toString()
      },
      "author": {
        "@type": "Person",
        "name": review.title.rendered
      },
      "reviewBody": review.content.rendered.replace(/<[^>]+>/g, ''), // Strip HTML
      "datePublished": review.acf.date
    }))
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Injecting Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <header className="bg-white py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold text-primary-900 mb-4">What Our Clients Say</h1>
          <p className="text-lg text-slate-600">
            We let our work and our clients speak for themselves. Here are some recent experiences from homeowners in the Apex area.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map(review => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900">{review.title.rendered}</h3>
                  <p className="text-sm text-slate-500">{review.acf.location} • {review.acf.service_type}</p>
                </div>
                <div className="flex text-accent-400">
                  {Array.from({ length: review.acf.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <div 
                className="prose prose-slate prose-sm max-w-none text-slate-700 italic"
                dangerouslySetInnerHTML={{ __html: review.content.rendered }}
              />
              <div className="mt-6 text-xs text-slate-400 font-medium tracking-wide uppercase">
                {new Date(review.acf.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
