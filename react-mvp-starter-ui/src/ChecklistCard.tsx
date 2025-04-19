import React from 'react';

export const ChecklistCard = ({ title, items }: { title: string, items: string[] }) => (
  <div className="p-6 border rounded-lg bg-white shadow">
    <h4 className="font-semibold text-lg mb-4">{title}</h4>
    <ul className="space-y-1 text-sm text-gray-700">
      {items.map((item, idx) => <li key={idx}>• {item}</li>)}
    </ul>
  </div>
);