import React from 'react';
import { motion } from 'framer-motion';

export type AboutSectionProps = {
  heading?: string;
  subheading?: string;
};

export function AboutSection(props: AboutSectionProps = {}) {
  const { heading = 'About the Bond', subheading = 'Our Mission' } = props ?? {};
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-8 text-center space-y-8 rounded-2xl"
      style={{ backgroundColor: '#ffffff', color: '#18181b' }}
    >
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{heading}</h2>
        <p className="text-base md:text-lg leading-relaxed opacity-90">{subheading}</p>
        <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-2xl mx-auto">
          “Kendrick & Drake: The Bond” is a curated digital lookbook capturing the rare chemistry
          between two artists who reshaped modern hip-hop. We treat their friendship like a couture
          collection: meticulously edited, emotionally precise, and designed to be revisited.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-[1.4fr,1fr] gap-6 items-center text-left md:text-left"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Every frame, caption, and color palette is selected to feel like a page torn from a
            high-fashion editorial—only the muses are Kendrick and Drake. We celebrate quiet
            moments, backstage glances, and the unspoken trust that powers their eras.
          </p>
          <p className="text-sm md:text-base leading-relaxed opacity-90">
            This experience is for fans who care about the details: the way a hoodie drapes during a
            verse, how a glance across the stage says more than a headline, and how two distinct
            legacies can still move in sync.
          </p>
        </div>

        <div className="space-y-4">
          <div
            className="relative p-5 rounded-2xl border shadow-sm text-left"
            style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
          >
            <div className="absolute -top-6 left-6 h-12 w-12 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: '#e11d48' }}>
              <span className="text-3xl text-white leading-none">“</span>
            </div>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              “Two distinct voices, one shared orbit. This lookbook isn&apos;t about rivalry—it&apos;s
              about resonance.”
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] opacity-70">
              Editorial Note · Kendrick &amp; Drake: The Bond
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-3 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border"
                 style={{ borderColor: '#e11d4833' }}>
              <img
                src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/assets/31d6169e-aef5-4afc-bfce-0efe464b4c80.png"
                alt="make them hug"
                crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] opacity-70">Curated For The Day Ones</p>
              <p className="text-sm font-medium">A high-fashion tribute to a rare creative alliance.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;