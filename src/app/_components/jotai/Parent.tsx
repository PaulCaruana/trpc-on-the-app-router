'use client'

// ParentComponent.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { globalStateAtom } from './globalState';
import {Child} from "@/app/_components/jotai/Child";

export function Parent() {
  const [globalState, setGlobalState] = useAtom(globalStateAtom);

  const handleButtonClick = () => {
    setGlobalState('New Value'); // Update the global state
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Global State: {globalState}</p>
      <button onClick={handleButtonClick}>Change Global State</button>
      <Child />
    </div>
  );
}
