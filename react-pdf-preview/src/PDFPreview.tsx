import React from 'react';

export const PDFPreview = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-lg p-6 print:p-0 print:shadow-none print:bg-white max-w-4xl mx-auto">
    {children}
  </div>
);