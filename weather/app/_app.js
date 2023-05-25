import { useClient } from 'react-query';

export default function App({ Component, pageProps }) {
  const client = useClient();
  return <Component {...pageProps} />;
}
