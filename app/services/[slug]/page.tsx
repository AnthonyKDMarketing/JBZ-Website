import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Phone, MessageSquare, Star, ArrowRight } from "lucide-react";
import servicesData from "@/data/services.json";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title.rendered} | JBZ Construction in Apex, NC`,
    description: service.excerpt.rendered,
    alternates: {
      canonical: `https://jbzconstruction.com/services/${service.slug}`
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title.rendered,
    "provider": {
      "@type": "LocalBusiness",
      "name": "JBZ Construction",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Apex",
        "addressRegion": "NC",
        "postalCode": "27502"
      }
    },
    "areaServed": "Apex, NC",
    "description": service.excerpt.rendered
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Service Header */}
      <header className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image src={service.acf.image_url} alt={service.title.rendered} fill className="object-cover opacity-30 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex items-center gap-2 text-sm text-primary-200 mb-6 font-medium">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span>{service.title.rendered}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight max-w-3xl">
            Premium {service.title.rendered} in Apex, NC
          </h1>
          <div className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed text-slate-200" dangerouslySetInnerHTML={{ __html: service.content.rendered }}></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <section className="mb-16">
              <h2 className="text-3xl font-black mb-8 text-primary-900">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.acf.specific_services.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <CheckCircle2 className="text-accent-500 shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-black mb-8 text-primary-900">The JBZ Advantage</h2>
              <ul className="space-y-4">
                {service.acf.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-primary-900"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            {/* Injected Gallery/Process Image snippet */}
            <section className="mb-16 rounded-xl overflow-hidden shadow-lg border border-slate-200">
               <div className="relative h-96 w-full">
                 <Image src={service.acf.image_url} alt="Project Gallery Preview" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold">Uncompromising Quality on Every Build</h3>
                 </div>
               </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-black mb-8 text-primary-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.acf.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-slate-50 rounded-lg border border-slate-200">
                    <summary className="font-bold text-lg cursor-pointer p-6 list-none flex items-center justify-between text-slate-800">
                      {faq.q}
                      <span className="transition group-open:rotate-180">
                        <ChevronRight />
                      </span>
                    </summary>
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200 mt-2">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* Sticky Sidebar: Conversion & Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Inline Lead Form */}
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-black mb-6 text-primary-900">Request a Quote</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500" placeholder="(919) 555-0123" />
                  </div>
                   <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Job Description</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500" placeholder={`Need help with ${service.title.rendered}...`}></textarea>
                  </div>
                  <button type="button" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-md transition-colors text-lg flex justify-center items-center gap-2">
                    <MessageSquare size={20} /> Build My Quote
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <span className="text-slate-500 text-sm font-medium block mb-2">Or call us directly for immediate help:</span>
                  <a href="tel:919-555-0198" className="inline-flex items-center gap-2 text-primary-900 font-black text-xl hover:text-accent-500 transition-colors">
                    <Phone size={20} /> (919) 555-0198
                  </a>
                </div>
              </div>

              {/* Trust Snippet */}
              <div className="bg-primary-900 text-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <p className="italic text-slate-200 mb-4 font-medium leading-relaxed">
                  "JBZ completely transformed our exterior. The crew was on time, transparent with pricing, and the workmanship is absolutely bulletproof."
                </p>
                <p className="font-bold text-sm text-primary-200">- Michael T., Apex NC</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Internal Routing Ribbon */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-8 text-slate-800">Explore Our Other Capabilities</h3>
          <div className="flex flex-wrap justify-center gap-4">
             {servicesData.filter(s => s.slug !== service.slug).slice(0,4).map((related) => (
                <Link key={related.id} href={`/services/${related.slug}`} className="bg-white border border-slate-200 px-6 py-3 rounded-full font-medium text-slate-700 hover:border-primary-900 hover:text-primary-900 hover:shadow-md transition-all flex items-center gap-2">
                  {related.title.rendered} <ArrowRight size={14} />
                </Link>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
