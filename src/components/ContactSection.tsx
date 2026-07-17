import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  researchAgreement: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  researchAgreement?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "procurement",
    message: "",
    researchAgreement: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (form.name.trim().length < 2) {
      tempErrors.name = "Please enter your full name (minimum 2 characters)";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address (e.g. name@institution.org)";
      isValid = false;
    }

    // Message Validation
    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (form.message.trim().length < 15) {
      tempErrors.message = "Please describe your research inquiry in more detail (minimum 15 characters)";
      isValid = false;
    }

    // Agreement Validation
    if (!form.researchAgreement) {
      tempErrors.researchAgreement = "You must confirm that this is strictly for research applications";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      subject: "procurement",
      message: "",
      researchAgreement: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700">
            Contact Laboratory
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Initiate a Scientific Consultation
          </h2>
          <div className="h-0.5 w-16 bg-teal-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Submit a formal procurement inquiry, request bulk synthesis schedules, or ask general compound specification questions. Our technical team responds within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information Column (Left Side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-xl tracking-tight">
                UK Peptide Labs Registry
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our main offices and temperature-controlled storage depots are located within the London Science Innovation Zone, allowing us to maintain fast transit links across the United Kingdom.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Corporate Office & Dispatch</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Suite 404, Science Innovation Centre,<br />
                    Imperial Wharf, London,<br />
                    SW6 2TY, United Kingdom
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-4">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Laboratory Support Telephone</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-mono">
                    +44 (0) 20 7946 0192
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    (Standard UK carrier rates apply)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Technical Support Email</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-mono hover:text-teal-700 transition-colors">
                    support@ukpeptidelabs.co.uk
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Monday to Friday: 09:00 – 17:30 BST<br />
                    Saturday & Sunday: Closed (Depot on stand-by)
                  </p>
                </div>
              </div>

            </div>

            {/* Certifications footer badge */}
            <div className="p-4 bg-teal-50/40 border border-teal-100/50 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <p className="text-xs text-teal-900 leading-normal">
                <strong>Data protection:</strong> We strictly encrypt and protect all client files, research proposals, and organizational data under UK GDPR standards. Your data is never sold or shared.
              </p>
            </div>
          </div>

          {/* Contact Form Column (Right Side) */}
          <div className="lg:col-span-7 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {isSubmitted ? (
              /* Success Message Card */
              <div className="text-center py-10 px-4 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 shadow-sm animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Inquiry Securely Logged
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. Your research application under standard protocol has been safely received. A laboratory standards officer will review your parameters and follow up at <strong>{form.email}</strong> within 24 business hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-700 transition-colors cursor-pointer"
                  >
                    Submit New Request
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Contact Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-bold text-slate-950 text-lg border-b border-slate-100 pb-3">
                  Inquiry Submission Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Arthur Pendelton"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl focus:border-teal-700 focus:outline-none transition-colors ${
                        errors.name ? "border-red-400 focus:border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Institutional Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. a.pendelton@oxford.ac.uk"
                      className={`w-full px-4 py-3 text-sm bg-white border rounded-xl focus:border-teal-700 focus:outline-none transition-colors ${
                        errors.email ? "border-red-400 focus:border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Inquiry Nature
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="procurement">Standard Reference Procurement</option>
                    <option value="bulk">Bulk Synthesis & Pricing Schedule</option>
                    <option value="compliance">Analytical Certification Verification</option>
                    <option value="other">General Chemical Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Research Parameters / Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your target analytical scope or bulk volume. (e.g. In-vitro binding affinity trials. Must meet HPLC purity &gt;99% in lyophilised dry crystal format...)"
                    className={`w-full px-4 py-3 text-sm bg-white border rounded-xl focus:border-teal-700 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-400 focus:border-red-400" : "border-slate-200"
                    }`}
                  />
                  {errors.message ? (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-[10px] text-slate-400">
                      Minimum 15 characters. Please do not submit specific human treatment plans.
                    </p>
                  )}
                </div>

                {/* Compliance Verification Checkbox */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      name="researchAgreement"
                      checked={form.researchAgreement}
                      onChange={handleChange}
                      className="mt-1 h-4.5 w-4.5 text-teal-700 border-slate-300 rounded focus:ring-teal-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      I explicitly verify that all requested chemical reference standards are destined strictly for in-vitro research, laboratory analysis, or academic trial programmes. I acknowledge they are strictly not intended for clinical or human use. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.researchAgreement && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.researchAgreement}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-700 hover:bg-teal-800 disabled:bg-slate-400 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Secure Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
