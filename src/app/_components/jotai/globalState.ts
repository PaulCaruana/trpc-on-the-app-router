"use client"

// GlobalState.ts
import { atom } from 'jotai';

export const globalStateAtom = atom<string>('Initial Value'); // Replace 'string' with the appropriate type for your state