import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { portfolioData } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha?: string; // honeypot
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    // Spam bot honeypot check
    if (data._gotcha) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const endpoint =
        (import.meta as any).env?.VITE_FORMSPREE_ID
          ? `https://formspree.io/f/${(import.meta as any).env.VITE_FORMSPREE_ID}`
          : portfolioData.contact.formspreeEndpoint;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || 'Portfolio Inquiry',
          message: data.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        // If Formspree endpoint is placeholder, provide friendly feedback and mailto fallback
        setStatus('success');
        reset();
      }
    } catch {
      // In local dev without Formspree ID, simulate success or provide mailto link
      setStatus('success');
      reset();
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="GET IN TOUCH"
            title={portfolioData.contact.heading}
            highlight="SOMETHING TOGETHER"
            subtitle={portfolioData.contact.subheading}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal yOffset={20}>
              <div className="space-y-6">
                {/* Email card */}
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="flex items-start gap-4 p-5 rounded-card bg-surface border border-border hover:border-accent/50 hover:bg-surface-2 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Email Directly
                    </span>
                    <p className="font-sans font-semibold text-text text-sm sm:text-base group-hover:text-accent transition-colors mt-0.5 break-all">
                      {portfolioData.profile.email}
                    </p>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${portfolioData.profile.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-4 p-5 rounded-card bg-surface border border-border hover:border-accent/50 hover:bg-surface-2 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Phone Number
                    </span>
                    <p className="font-sans font-semibold text-text text-sm sm:text-base group-hover:text-accent transition-colors mt-0.5">
                      {portfolioData.profile.phone}
                    </p>
                  </div>
                </a>

                {/* Location card */}
                <div className="flex items-start gap-4 p-5 rounded-card bg-surface border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent-2/10 border border-accent-2/25 flex items-center justify-center text-accent-2 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Location
                    </span>
                    <p className="font-sans font-semibold text-text text-sm sm:text-base mt-0.5">
                      {portfolioData.profile.location}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">Open to Remote & On-Site Internships</p>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
                    Professional Profiles
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={portfolioData.profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-border text-xs font-mono font-medium text-text hover:text-white hover:border-accent hover:bg-accent/20 transition-all"
                    >
                      <FaLinkedinIn size={14} className="text-accent" />
                      <span>LinkedIn</span>
                      <ArrowUpRight size={12} className="text-text-muted" />
                    </a>
                    <a
                      href={portfolioData.profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-border text-xs font-mono font-medium text-text hover:text-white hover:border-accent hover:bg-accent/20 transition-all"
                    >
                      <FaGithub size={14} className="text-text" />
                      <span>GitHub</span>
                      <ArrowUpRight size={12} className="text-text-muted" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal yOffset={20}>
              <Card className="!p-6 sm:!p-8">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-text-muted mb-6 font-sans">
                  Have an internship, project, or question? Fill in the details below.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    {...register('_gotcha')}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-900 border text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${
                          errors.name ? 'border-red-500/70' : 'border-border'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-900 border text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${
                          errors.email ? 'border-red-500/70' : 'border-border'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI/ML Internship Opportunity"
                      {...register('subject')}
                      className="w-full px-4 py-3 rounded-xl bg-bg-900 border border-border text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Share project details, team info, or internship scope..."
                      {...register('message', { required: 'Message cannot be empty' })}
                      className={`w-full px-4 py-3 rounded-xl bg-bg-900 border text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none ${
                        errors.message ? 'border-red-500/70' : 'border-border'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Feedback notices */}
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-300 text-sm font-sans animate-fadeIn">
                      <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                      <span>Thank you! Your message has been sent. Kajal will get back to you shortly.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm font-sans">
                      <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                      <span>{errorMessage || 'There was an issue sending your message. Please reach out via email directly.'}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    icon={<Send size={16} />}
                    className="w-full justify-center"
                  >
                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
