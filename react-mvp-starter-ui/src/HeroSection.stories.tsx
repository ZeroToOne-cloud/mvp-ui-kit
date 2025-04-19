import React from 'react';
import { HeroSection } from './HeroSection';

export default { title: 'UI/HeroSection', component: HeroSection };

export const Default = () => (
  <HeroSection
    title="Build your MVP fast."
    subtitle="Drop-in components designed to launch bold ideas."
    cta={{ label: 'Get Started', href: '#' }}
  />
);