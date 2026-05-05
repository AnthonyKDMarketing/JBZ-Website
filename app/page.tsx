import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import reviewsData from "@/data/reviews.json";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      
      {/* Short Trust/Reviews Section */}
      <section className="pt-6 pb-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Trusted by Homeowners in Apex & Surrounding Areas</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.slice(0, 3).map(review => (
              <div key={review.id} className="p-6 bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col">
                <div className="flex justify-center mb-4 text-accent-500">
                  {Array.from({ length: review.acf.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div 
                  className="text-slate-700 italic mb-4 flex-grow prose prose-sm prose-slate max-w-none text-sm leading-relaxed max-h-48 overflow-y-auto custom-scrollbar"
                  dangerouslySetInnerHTML={{ __html: review.content.rendered }}
                />
                <p className="font-bold mt-auto pt-2 border-t border-slate-100">- {review.title.rendered}</p>
                <p className="text-xs text-slate-500">{review.acf.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content / Value Prop block */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Your Local Experts for Exterior Excellence</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            As a premiere contractor serving Apex, NC and the surrounding 25-mile radius, we understand the specific challenges that local weather events create for homes. From resilient, low-maintenance siding to sturdy custom carpentry and premium window replacements, we offer a dedicated, high-quality approach to every task.
          </p>
        </div>
      </section>
    </>
  );
}
