import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Mail, User, BookOpen, MessageSquare } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    
    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    
    if (!formData.subject.trim()) errors.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      errors.message = "Please include a message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Fallback to mailto if key is missing
      setIsSubmitting(false);
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:${PORTFOLIO_OWNER.email}?subject=${subject}&body=${body}`;
      const newWindow = window.open(mailtoLink, '_blank');
      if (!newWindow) {
          window.location.href = mailtoLink;
      }
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-zinc-50/50 dark:bg-[#0D0D0D] border-t border-zinc-100 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-550 dark:text-zinc-400">
            Let's Collaborate
          </span>
          <span className="block text-3xl font-light tracking-tight text-zinc-900 dark:text-white">
            Get in <span className="font-serif italic text-zinc-700 dark:text-zinc-300">touch</span>
          </span>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto font-light leading-relaxed">
            Have a project in mind, a job opportunity, or just want to discuss high-level system engineering? Transmit a query.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Quick indicators */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111111] border border-zinc-150/80 dark:border-white/5 shadow-3xs">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-4">
                Primary Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs leading-normal">
                  <Mail className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-zinc-900 dark:text-zinc-100">Email Inquiry</span>
                    <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      {PORTFOLIO_OWNER.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs leading-normal">
                  <User className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-zinc-900 dark:text-zinc-100">Location Base</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{PORTFOLIO_OWNER.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-dashed border-zinc-200 dark:border-white/10 text-center font-mono text-[10px] text-zinc-400 space-y-1">
              <p>Form processing securely integrated.</p>
              <p className="text-zinc-450 dark:text-zinc-500">Your message will be routed directly to the developer's inbox.</p>
            </div>
          </div>

          {/* Right panel: Active Form */}
          <div className="md:col-span-8">
            <div className="bg-white dark:bg-[#111111] rounded-2xl border border-zinc-150/80 dark:border-white/5 p-6 sm:p-8 shadow-xs">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    id="contact-form-element"
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    noValidate
                  >
                    {submitError && (
                      <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                          {submitError}
                        </p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-2xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 h-11 rounded-lg border text-xs bg-zinc-50/50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-all outline-hidden ${
                              formErrors.name
                                ? "border-red-400 dark:border-red-900/40 focus:ring-1 focus:ring-red-500"
                                : "border-zinc-200/80 dark:border-white/10 focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400/20"
                            }`}
                            placeholder="Harshith V"
                          />
                        </div>
                        {formErrors.name && (
                          <p id="error-name" className="text-[10px] text-red-500 dark:text-red-400 flex items-center">
                            <AlertCircle className="w-3.5 h-3.5 mr-1" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-2xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                          Your Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 h-11 rounded-lg border text-xs bg-zinc-50/50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-all outline-hidden ${
                              formErrors.email
                                ? "border-red-400 dark:border-red-900/40 focus:ring-1 focus:ring-red-500"
                                : "border-zinc-200/80 dark:border-white/10 focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400/20"
                            }`}
                            placeholder="harshithviswanthappa@example.com"
                          />
                        </div>
                        {formErrors.email && (
                          <p id="error-email" className="text-[10px] text-red-500 dark:text-red-400 flex items-center">
                            <AlertCircle className="w-3.5 h-3.5 mr-1" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-2xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                        Subject Topic
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 h-11 rounded-lg border text-xs bg-zinc-50/50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-all outline-hidden ${
                            formErrors.subject
                              ? "border-red-400 dark:border-red-900/40 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-200/80 dark:border-white/10 focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400/20"
                          }`}
                          placeholder="Project Partnership details"
                        />
                      </div>
                      {formErrors.subject && (
                        <p id="error-subject" className="text-[10px] text-red-500 dark:text-red-400 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message body input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-2xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                        Inquiry Details
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border text-xs bg-zinc-50/50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-all outline-hidden ${
                            formErrors.message
                              ? "border-red-400 dark:border-red-900/40 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-200/80 dark:border-white/10 focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400/20"
                          }`}
                          placeholder="Hey! I have an outstanding backend project requirement..."
                        />
                      </div>
                      {formErrors.message && (
                        <p id="error-message" className="text-[10px] text-red-500 dark:text-red-400 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <button
                      id="btn-submit-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 h-11 bg-zinc-950 hover:opacity-95 dark:bg-white dark:hover:opacity-90 text-white dark:text-zinc-950 text-2xs font-bold uppercase tracking-widest rounded-lg cursor-pointer transition-colors border-0 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Queuing message...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 mr-2 animate-pulse" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="contact-form-success"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 mb-2 border border-emerald-150 dark:border-white/10">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                      Transmission Confirmed
                    </h3>

                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed font-light">
                      Thank you! Your message has been successfully generated and delivered to my inbox. I will review it and get back to you shortly.
                    </p>

                    <button
                      id="btn-reset-success"
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center justify-center px-5 h-9 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-305 hover:bg-zinc-50 dark:hover:bg-white/5 text-2xs uppercase tracking-wider font-bold cursor-pointer transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
