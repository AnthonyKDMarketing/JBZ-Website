"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // REPLACE THIS URL with your Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbyRIMMcV-ObNoa2WwiewFSBMK7fw--AXFOc5GIQVlhIppS3f78vALd6PMVBn6ZJ9Qdtlg/exec";

      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Apps Script to bypass CORS limitations
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
          Thank you! Your message has been sent successfully. We will get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
          Oops! Something went wrong. Please try again later or contact us directly.
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
          <input name="firstName" required type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
          <input name="lastName" required type="text" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900" placeholder="Doe" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
        <input name="email" required type="email" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900" placeholder="john@example.com" />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
        <select name="service" required className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white text-slate-900">
          <option>Siding Installation</option>
          <option>Custom Carpentry</option>
          <option>Window Replacement</option>
          <option>Other / Multiple Services</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
        <textarea name="details" required rows={4} className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-900" placeholder="Tell us a little bit about what you need..."></textarea>
      </div>

      <button type="submit" disabled={status === "submitting"} className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:opacity-70">
        {status === "submitting" ? "Sending..." : "Request Free Quote"}
      </button>
    </form>
  );
}
