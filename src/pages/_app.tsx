import localFont from '@next/font/local';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppProps } from 'next/app';

import { api } from '~/utils/api';

import { type NextPage } from 'next';
import { type ReactElement, type ReactNode } from 'react';
import Layout from '~/layouts/layout';
import '~/styles/globals.css';
import renderGoogleAnaltics from '~/helpers/analytics';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir-Medium.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Avenir-Heavy.woff2',
      weight: '800',
    },
  ],
  variable: '--font-avenir',
});

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) => {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);

  return (
    <>
      {renderGoogleAnaltics()}

      <SessionProvider session={pageProps.session}>
        <div className={`${avenir.variable} font-sans`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(App);
