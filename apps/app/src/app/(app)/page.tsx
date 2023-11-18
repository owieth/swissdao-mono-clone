import { Metadata } from 'next';

import DashboardPage from './dashboard-page';

export const metadata: Metadata = {
  title: 'swissDAO - Dashboard',
  description: 'swissDAO - Membership Overview',
};

export default function MainPage() {
  return <DashboardPage />;
}
