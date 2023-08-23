import { type ReactNode } from 'react';

const RawLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {children}
    </main>
  );
};

export default RawLayout;
