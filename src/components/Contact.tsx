import { useState } from 'react';
import { Mail, Phone, MapPin, Send, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';

// Inline SVGs for Brand Icons since Lucide does not export them in this version
const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


export default function Contact() {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate server request latency (1.2s)
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setSubmitting(false);
    setSuccess(true);
    setFormState({ name: '', email: '', message: '' });

    // Auto reset success message after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Get in touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">Let&apos;s Work Together</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            Available for internships, freelance contracts, or full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Contact Details (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-base font-bold text-neutral-950">Connection Points</h3>
            
            <div className="flex flex-col gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 text-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personal.email}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 text-secondary flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personal.phone}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 text-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="h-[1px] bg-neutral-100 w-full mt-2" />

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-widest font-mono">Profiles</h4>
              <div className="flex gap-3">
                <a 
                  href={personal.socials.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a 
                  href={personal.socials.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a 
                  href={personal.socials.medium}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-950 flex items-center justify-center transition-colors"
                >
                  <BookOpen className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Input Form (Spans 7 columns) */}
          <div className="lg:col-span-7 w-full bg-neutral-50 border border-neutral-200 p-6 md:p-8 shadow-sm">
            {success ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Message Sent!</h3>
                <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                  Thank you for writing. I will evaluate your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-neutral-950">Write a message</h3>
                  <p className="text-xs text-neutral-500">I will reply within 24 hours.</p>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name-input" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name-input"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-neutral-200 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-secondary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email-input" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email-input"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Your Email Address" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-neutral-200 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-secondary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message-input" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                    Message
                  </label>
                  <textarea 
                    id="message-input"
                    rows={4} 
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your build requirement or opportunity..." 
                    required 
                    className="w-full px-4 py-3 bg-white border border-neutral-200 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-secondary transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-[13px] uppercase tracking-wider transition-all disabled:opacity-50"
                  id="submit-message-btn"
                >
                  {submitting ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
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
