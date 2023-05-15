import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppProps } from 'next/app';

import { api } from '~/utils/api';

import { type NextPage } from 'next';
import { type ReactElement, type ReactNode } from 'react';
import Layout from '~/layouts/layout';
import '~/styles/globals.css';

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
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default api.withTRPC(App);
