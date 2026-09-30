import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Flame, Star } from 'lucide-react';

export type HeroSectionProps = {
  onExploreClick?: () => void;
};

export function HeroSection(props: HeroSectionProps = {}) {
  const { onExploreClick } = props;
  const chips = [
    'Timeline Moments',
    'Unreleased Stories',
    'Tour Wardrobe Archive',
    'Behind-The-Stage Energy',
  ];
  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const el = document.querySelector?.('#product-grid');
    if (el instanceof HTMLElement) {
      el.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className="space-y-7 text-left"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 border text-xs font-medium tracking-wide uppercase"
          style={{ backgroundColor: '#ffffff', borderColor: '#e11d4833', color: '#18181b' }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kendrick &amp; Drake · The Bond</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: '#18181b' }}
        >
          Kendrick Lamar &amp; Drake Friendship
        </h1>
        <p
          className="text-lg opacity-85 max-w-xl"
          style={{ color: '#18181b' }}
        >
          A high-fashion digital lookbook chronicling the eras, outfits, and
          unseen chemistry of two hip‑hop giants—curated as an intimate visual
          story.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={handleExploreClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-md transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: '#e11d48',
              color: '#ffffff',
              borderColor: '#e11d48',
            }}
          >
            <span>Explore the Lookbook</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 text-xs sm:text-sm"
            style={{ color: '#18181b' }}
          >
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">Curated eras:</span>
            <span className="opacity-80">Origins · Tours · Awards · Off‑guard</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-4">
          {chips?.map((chip) => (
            <div
              key={chip}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs"
              style={{
                backgroundColor: '#ffffff',
                color: '#18181b',
                border: '1px solid #e11d4833',
              }}
            >
              <Flame className="w-3.5 h-3.5 text-[#e11d48]" />
              <span>{chip}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="relative aspect-video rounded-2xl overflow-hidden border shadow-xl flex items-center justify-center"
        style={{ backgroundColor: '#ffffff', borderColor: '#e11d4833' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=85"
            alt="Contemporary Fashion Banner"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
        <div className="relative flex h-full w-full items-center justify-center px-6">
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <div className="col-span-2 flex justify-center">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2"
                style={{ borderColor: '#e11d48' }}
              >
                <img
                  src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/assets/31d6169e-aef5-4afc-bfce-0efe464b4c80.png"
                  alt="make them hug"
                  crossOrigin="anonymous"
                  className="w-full h-full object-contain bg-transparent"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border"
              style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
            >
              <img
                src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/6a209176-dd7b-4c76-b3ac-0ed8b899131c.png"
                alt="image.png"
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border"
              style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
            >
              <img
                src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/11746302-cec5-4b69-b8f2-35dc074890d7.png"
                alt="image.png"
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;