import React from 'react';

export const PricingTable = ({ plans }: { plans: Array<{ name: string, price: string, features: string[] }> }) => (
  <div className="grid md:grid-cols-3 gap-6 px-4 py-12 bg-gray-50">
    {plans.map((plan, idx) => (
      <div key={idx} className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-3xl font-bold mb-4">{plan.price}</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {plan.features.map((feature, fidx) => <li key={fidx}>✓ {feature}</li>)}
        </ul>
      </div>
    ))}
  </div>
);