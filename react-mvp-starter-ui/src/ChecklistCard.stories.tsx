import React from 'react';
import { ChecklistCard } from './ChecklistCard';

export default { title: 'UI/ChecklistCard', component: ChecklistCard };

export const Default = () => (
  <ChecklistCard
    title="Pre-Launch Checklist"
    items={['Define your audience', 'Build MVP', 'Launch and gather feedback']}
  />
);