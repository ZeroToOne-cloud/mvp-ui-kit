import React from 'react';
import { CallToAction } from './CallToAction';

export default { title: 'UI/CallToAction', component: CallToAction };

export const Default = () => (
  <CallToAction
    heading="Ready to get started?"
    button={{ label: 'Launch Now', href: '#' }}
  />
);