import React from 'react';

export const HeroSection = ({ title, subtitle, cta }: { title: string, subtitle: string, cta: { label: string, href: string } }) => (
  <section className="text-center py-20 px-4 bg-white">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
    <a href={cta.href} className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
      {cta.label}
    </a>
  </section>
);