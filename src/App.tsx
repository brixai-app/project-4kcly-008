import React from 'react';
import { Toaster } from 'sonner';
import HeroSection, { HeroSectionProps } from './components/HeroSection';
import ProductGridSection, { ProductGridSectionProps } from './components/ProductGridSection';
import AboutSection, { AboutSectionProps } from './components/AboutSection';
import ContactFormSection, { ContactFormSectionProps } from './components/ContactFormSection';
import FooterSection, { FooterSectionProps } from './components/FooterSection';

export function App() {
  const heroProps: HeroSectionProps = {
    onExploreClick: () => {
      const section = document.querySelector<HTMLElement>('#product-grid');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  };

  const productGridProps: ProductGridSectionProps = {
    heading: 'Asset Highlights',
  };

  const aboutProps: AboutSectionProps = {
    heading: 'About the Bond',
    subheading:
      'A visual anthology of the rare chemistry, mutual respect, and creative tension that defined an era in hip-hop.',
  };

  const contactProps: ContactFormSectionProps = {
    heading: 'Get in Touch',
    subheading: 'Share your favorite era, verse, or memory from the Kendrick & Drake story.',
  };

  const footerProps: FooterSectionProps = {
    brandName: 'Kendrick & Drake: The Bond',
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#fafafa', color: '#18181b' }}
    >
      <Toaster position="top-center" richColors expand />
      <main className="space-y-16 py-8">
        <HeroSection {...heroProps} />
        <ProductGridSection {...productGridProps} />
        <AboutSection {...aboutProps} />
        <ContactFormSection {...contactProps} />
        <FooterSection {...footerProps} />
      </main>
    </div>
  );
}

export default App;