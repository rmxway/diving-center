import { createContext, RefObject } from 'react';

export const InputContext = createContext<RefObject<HTMLInputElement | null> | null>(null);
