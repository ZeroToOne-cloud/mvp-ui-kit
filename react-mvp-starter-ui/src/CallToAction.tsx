import React from 'react';

export const CallToAction = ({ heading, button }: { heading: string, button: { label: string, href: string } }) => (
  <div className="text-center py-12 px-4 bg-blue-600 text-white">
    <h2 className="text-2xl font-bold mb-4">{heading}</h2>
    <a href={button.href} className="bg-white text-blue-600 px-5 py-3 font-medium rounded hover:bg-gray-100 transition">
      {button.label}
    </a>
  </div>
);