import React, { useState } from 'react';

export const OnboardingWizard = ({ children }: { children: React.ReactElement[] }) => {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => Math.min(prev + 1, children.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      {children[step]}
      <div className="flex justify-between mt-6">
        <button onClick={back} disabled={step === 0} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Back</button>
        <button onClick={next} disabled={step === children.length - 1} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
};