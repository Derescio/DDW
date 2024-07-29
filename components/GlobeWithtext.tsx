import React from 'react';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { GlobeDemo } from './GitHubGlobe';

export const GlobeWithText = () => {
  return (
    <div className="relative h-screen w-full">
      <GlobeDemo  />
      <div className="absolute inset-0 flex items-center justify-center">
        <TextGenerateEffect words="Welcome to My Portfolio" />
      </div>
    </div>
  );
};
