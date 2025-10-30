'use client';
import { CountContext } from '../context/CountContext';
export default function CountProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  return (
    <CountContext.Provider value={count}>
      {children}
    </CountContext.Provider>
  );
}