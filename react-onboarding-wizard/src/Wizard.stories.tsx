import React from 'react';
import { OnboardingWizard } from './OnboardingWizard';
import { Step } from './Step';

export default { title: 'Wizard/Onboarding', component: OnboardingWizard };

export const Default = () => (
  <OnboardingWizard>
    <Step title="Step One">Welcome to the setup wizard.</Step>
    <Step title="Step Two">Enter your details.</Step>
    <Step title="Step Three">You're all set!</Step>
  </OnboardingWizard>
);