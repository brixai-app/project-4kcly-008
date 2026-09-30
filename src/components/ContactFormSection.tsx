import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export type ContactFormSectionProps = {
  heading?: string;
  subheading?: string;
};

type Submission = {
  id: string;
  name: string;
  message: string;
  timestamp: number;
};

const STORAGE_KEY = 'kd_bond_submissions_v1';

function loadSubmissions(): Submission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage?.getItem(STORAGE_KEY) ?? '[]';
    const parsed = JSON.parse(raw) as Submission[];
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, 5);
  } catch {
    return [];
  }
}

function saveSubmissions(list: Submission[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 5)));
  } catch {
    return;
  }
}

export function ContactFormSection(props: ContactFormSectionProps = {}) {
  const heading = props.heading ?? 'Get in Touch';
  const subheading =
    props.subheading ?? 'Share your favorite Kendrick & Drake memory or note with the editorial team.';
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setSubmissions(loadSubmissions());
  }, []);

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email.';
    }
    if (!message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (message.trim().length < 12) {
      nextErrors.message = 'Share at least 12 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const isValid = Boolean(
    name.trim() &&
      email.trim() &&
      message.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
      message.trim().length >= 12 &&
      Object.keys(errors ?? {}).length === 0
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      const submission: Submission = {
        id: crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
        name: name.trim(),
        message: message.trim(),
        timestamp: Date.now(),
      };
      const nextList = [submission, ...submissions].slice(0, 5);
      setSubmissions(nextList);
      saveSubmissions(nextList);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      toast.success('Note sent to the editorial team.');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="max-w-xl mx-auto px-6 py-8">
      <motion.div
        className="p-8 rounded-2xl border shadow-sm space-y-6"
        style={{ backgroundColor: '#ffffff', borderColor: '#e11d4833' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-center" style={{ color: '#18181b' }}>
            {heading}
          </h2>
          <p className="text-sm text-center opacity-80" style={{ color: '#18181b' }}>
            {subheading}
          </p>
          <div className="flex gap-2">
            <img
              src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/assets/31d6169e-aef5-4afc-bfce-0efe464b4c80.png"
              alt="make them hug"
              crossOrigin="anonymous"
              className="h-12 w-12 object-contain"
            />
            <img
              src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/6a209176-dd7b-4c76-b3ac-0ed8b899131c.png"
              alt="image.png"
              crossOrigin="anonymous"
              className="h-12 w-12 object-contain"
            />
            <img
              src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/11746302-cec5-4b69-b8f2-35dc074890d7.png"
              alt="image.png"
              crossOrigin="anonymous"
              className="h-12 w-12 object-contain hidden sm:block"
            />
          </div>
        </div>
        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" style={{ color: '#18181b' }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e?.target?.value ?? '')}
              onBlur={validate}
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              style={{
                borderColor: errors?.name ? '#e11d48' : '#e11d4833',
                color: '#18181b',
              }}
            />
            {errors?.name && (
              <p className="text-xs" style={{ color: '#e11d48' }}>
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" style={{ color: '#18181b' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value ?? '')}
              onBlur={validate}
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              style={{
                borderColor: errors?.email ? '#e11d48' : '#e11d4833',
                color: '#18181b',
              }}
            />
            {errors?.email && (
              <p className="text-xs" style={{ color: '#e11d48' }}>
                {errors.email}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" style={{ color: '#18181b' }}>
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e?.target?.value ?? '')}
              onBlur={validate}
              rows={4}
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none resize-none focus:ring-2"
              style={{
                borderColor: errors?.message ? '#e11d48' : '#e11d4833',
                color: '#18181b',
              }}
            />
            {errors?.message && (
              <p className="text-xs" style={{ color: '#e11d48' }}>
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100"
            style={{ backgroundColor: '#e11d48', color: '#ffffff' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Note'}
          </button>
        </form>
        {submissions?.length > 0 && (
          <div className="pt-4 border-t" style={{ borderColor: '#e11d4833' }}>
            <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#18181b' }}>
              Recent fan notes
            </h3>
            <ul className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {submissions.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg px-3 py-2 border text-xs"
                  style={{ borderColor: '#e11d4833', color: '#18181b' }}
                >
                  <p className="font-medium mb-0.5">{item.name}</p>
                  <p className="opacity-80 line-clamp-2">{item.message}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default ContactFormSection;