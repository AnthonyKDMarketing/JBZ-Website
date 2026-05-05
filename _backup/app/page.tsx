import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      
      {/* Short Trust/Reviews Section */}
      <section className="pt-6 pb-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Trusted by Homeowners in Apex, NC</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4 text-accent-500">
                ★★★★★
              </div>
              <p className="text-slate-700 italic mb-4">"JBZ Construction completely transformed our exterior with new James Hardie siding. Professional, on-time, and left the site immaculate!"</p>
              <p className="font-bold">- Sarah Jenkins</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4 text-accent-500">
                ★★★★★
              </div>
              <p className="text-slate-700 italic mb-4">"Our new custom deck is beautiful. The carpentry team pays so much attention to detail."</p>
              <p className="font-bold">- Mike & Linda T.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4 text-accent-500">
                ★★★★★
              </div>
              <p className="text-slate-700 italic mb-4">"Replaced all 15 windows in our home. Process was seamless and our energy bills have dropped."</p>
              <p className="font-bold">- David R.</p>
            </div>
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
