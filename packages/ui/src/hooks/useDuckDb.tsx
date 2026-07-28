"use client"

import { createContext, useContext, ReactNode } from 'react';

export interface DuckDbContextValue {
  execute: (query: string) => Promise<any[]>;
  isInitializing: boolean;
  error: Error | null;
}

export const DuckDbContext = createContext<DuckDbContextValue | null>(null);

export interface DuckDbProviderProps {
  children: ReactNode;
  value: DuckDbContextValue;
}

export function DuckDbProvider({ children, value }: DuckDbProviderProps) {
  return (
    <DuckDbContext.Provider value={value}>
      {children}
    </DuckDbContext.Provider>
  );
}

export function useDuckDb(): DuckDbContextValue {
  const context = useContext(DuckDbContext);
  if (!context) {
    throw new Error('useDuckDb must be used within a DuckDbProvider');
  }
  return context;
}
