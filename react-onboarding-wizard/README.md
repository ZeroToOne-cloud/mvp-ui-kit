# react-onboarding-wizard

A lightweight, animated onboarding flow for React apps. Perfect for product setup, walkthroughs, or MVP wizards.

## Features

- Step-based wizard component
- Progress tracking
- Transitions powered by Framer Motion
- Built-in localStorage persistence

## Installation

```bash
npm install react-onboarding-wizard
# or
yarn add react-onboarding-wizard
```

## Usage

```tsx
import { OnboardingWizard, Step } from 'react-onboarding-wizard';

<OnboardingWizard>
  <Step title="Welcome">
    <p>Let's get you set up in just a few steps.</p>
  </Step>
  <Step title="Profile Info">
    <FormComponent />
  </Step>
</OnboardingWizard>
```

## License

MIT
