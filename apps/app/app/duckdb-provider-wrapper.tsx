"use client"

import { ReactNode } from 'react';
import { DuckDbProvider } from '@repo/ui/hooks';
import { useLocalDuckDb } from '../lib/analytics/use-local-duckdb';

interface DuckDbProviderWrapperProps {
  children: ReactNode;
}

export function DuckDbProviderWrapper({ children }: DuckDbProviderWrapperProps) {
  const duckDbValue = useLocalDuckDb();

  return (
    <DuckDbProvider value={duckDbValue}>
      {children}
    </DuckDbProvider>
  );
}
