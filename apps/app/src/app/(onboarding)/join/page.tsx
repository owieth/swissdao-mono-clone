import { Metadata } from 'next';

import JoinPage from './join-page';

export const metadata: Metadata = {
  title: 'swissDAO - Join',
  description: 'swissDAO - Join',
};

export default function Page() {
  return <JoinPage />;
}
