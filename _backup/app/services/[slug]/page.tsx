import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) return { title: "Not Found" };
  
  return {
    title: service.title.rendered,
    description: service.excerpt.rendered,
    keywords: service.acf.seo_keywords.join(", "),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Service Header */}
      <header className="bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-500 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {service.title.rendered}
          </h1>
          <p className="text-xl text-slate-300">
            {service.excerpt.rendered}
          </p>
        </div>
      </header>

      {/* Service Content */}
      <div className="container mx-auto px-4 max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:text-primary-900 prose-a:text-accent-600 mb-12"
            dangerouslySetInnerHTML={{ __html: service.content.rendered }}
          />

          <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b pb-2">Our Process</h2>
          <div className="space-y-6">
            {service.acf.process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-primary-900">Key Benefits</h3>
            <ul className="space-y-3">
              {service.acf.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="text-accent-500 flex-shrink-0 mt-0.5" size={18} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 text-center">
            <h3 className="font-bold text-lg mb-2 text-primary-900">Ready to start?</h3>
            <p className="text-sm text-slate-600 mb-6">Contact us for a free estimate in the Apex, NC area.</p>
            <Link href="/contact" className="block w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded text-center font-bold transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
