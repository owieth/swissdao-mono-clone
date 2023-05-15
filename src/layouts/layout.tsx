import { type ReactNode } from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Seo from '~/components/seo/seo';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
