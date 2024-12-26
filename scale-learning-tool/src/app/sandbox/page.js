import { useEffect } from 'react';
import { GuitarNeck } from '@/components/GuitarNeck';
import { ScaleSelector } from '@/components/ScaleSelector';

export default function SandboxPage() {
  // Next.js specific data fetching
  useEffect(() => {
    // Load initial data
  }, []);

  return (
    <div>
      <h1>Guitar Scale Sandbox</h1>
      <ScaleSelector />
      <GuitarNeck />
    </div>
  );
}