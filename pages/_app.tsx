import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/common/Layout';
import { store } from '../lib/redux/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
