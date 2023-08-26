import { type ReactNode } from 'react';

const RawLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative h-screen w-screen bg-black">{children}</main>
  );
};

export default RawLayout;
