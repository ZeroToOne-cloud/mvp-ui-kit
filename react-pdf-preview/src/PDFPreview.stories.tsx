import React from 'react';
import { PDFPreview } from './PDFPreview';
import { PDFPage } from './PDFPage';

export default { title: 'PDF/Preview', component: PDFPreview };

export const Default = () => (
  <PDFPreview>
    <PDFPage>
      <h1 className="text-xl font-bold">Demo Report</h1>
      <p>This content will print cleanly in PDF format.</p>
    </PDFPage>
  </PDFPreview>
);