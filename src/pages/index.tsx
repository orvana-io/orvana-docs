import React from 'react';

export default function Home(): JSX.Element {
  if (typeof window !== 'undefined') {
    window.location.href = '/docs/introduction';
  }
  return <div>Redirecting to docs...</div>;
}
