import React from 'react';
import { Link } from 'react-router-dom';

export type FooterSectionProps = {
  brandName?: string;
};

export function FooterSection(props: FooterSectionProps = {}) {
  const brandName = props?.brandName ?? 'Kendrick & Drake: The Bond';
  return (
    <footer
      className="border-t py-8 mt-16"
      style={{ borderColor: '#e11d4822', backgroundColor: '#fafafa', color: '#18181b' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <p className="text-center md:text-left">
          © 2026 {brandName}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="hover:underline underline-offset-4"
          >
            Story
          </a>
          <a
            href="#product-grid"
            className="hover:underline underline-offset-4"
          >
            Lookbook
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4"
          >
            Contact
          </a>
          <Link
            to="/"
            className="px-3 py-1 rounded-full text-xs font-medium border"
            style={{ borderColor: '#e11d4833', color: '#18181b' }}
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;