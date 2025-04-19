# react-pdf-preview

A clean, styled PDF preview tool for React. Perfect for forms, reports, receipts, and exportable content.

## Features

- Styled printable content preview
- PDF layout presets: A4, Letter
- Print & Download buttons
- Tailwind CSS support
- Compatible with Grover, Puppeteer, or browser print

## Installation

```bash
npm install react-pdf-preview
# or
yarn add react-pdf-preview
```

## Usage

```tsx
import { PDFPreview, PDFPage } from 'react-pdf-preview';

<PDFPreview>
  <PDFPage>
    <h1>Your Custom Report</h1>
    <p>This will print beautifully.</p>
  </PDFPage>
</PDFPreview>
```

## License

MIT
