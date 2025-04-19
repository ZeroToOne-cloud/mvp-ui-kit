import React from 'react';

export const Step = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div>{children}</div>
  </div>
);