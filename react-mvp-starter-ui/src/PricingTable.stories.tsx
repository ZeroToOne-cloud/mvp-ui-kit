import React from 'react';
import { PricingTable } from './PricingTable';

export default { title: 'UI/PricingTable', component: PricingTable };

export const Default = () => (
  <PricingTable
    plans={[
      { name: 'Starter', price: '$0', features: ['1 project', 'Community support'] },
      { name: 'Pro', price: '$29/mo', features: ['Unlimited projects', 'Priority support'] },
      { name: 'Enterprise', price: 'Contact us', features: ['Custom features', 'Dedicated support'] }
    ]}
  />
);