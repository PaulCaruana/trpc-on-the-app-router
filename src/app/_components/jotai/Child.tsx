'use client'
// ChildComponent.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { globalStateAtom } from './globalState'; // Import the global atom

export function Child() {
  const [globalState, setGlobalState] = useAtom(globalStateAtom);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Global State in Child: {globalState}</p>
      <button onClick={() => setGlobalState('Child New Value')}>Change Global State in Child</button>
    </div>
  );
}
