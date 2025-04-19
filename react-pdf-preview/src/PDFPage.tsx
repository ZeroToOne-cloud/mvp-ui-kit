import React from 'react';

export const PDFPage = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-8 mb-6 border border-gray-300 print:break-after-page print:border-none">
    {children}
  </div>
);