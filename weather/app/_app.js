import { useClient } from 'react-query';

export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />;
}
