import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ToolId } from '../../types';

interface ContactProps {
  onNavigate: (tool: ToolId) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvbrpkk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          onNavigate(ToolId.DASHBOARD);
        }, 2000);
      } else {
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Message Sent!</h2>
        <p className="text-slate-600 dark:text-slate-300">Thank you for reaching out. We'll get back to you shortly.</p>
        <p className="text-sm text-slate-400">Redirecting to Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-400">Have questions about our SEO tools, pricing, or enterprise solutions? We'd love to hear from you.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
              <input 
                type="text" 
                name="firstName"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-transparent dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                id="lastName"
                required
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-transparent dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
            <input 
              type="email" 
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-transparent dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
            <select 
              name="subject"
              id="subject"
              className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white dark:bg-slate-800 dark:text-white"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Professional Plan Trial">Professional Plan - 7 Day Trial</option>
              <option value="Enterprise Inquiry">Enterprise Solutions</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Billing">Billing & Subscription</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea 
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none bg-transparent dark:text-white"
              placeholder="How can we help you today?"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;