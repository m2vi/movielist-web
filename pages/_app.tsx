import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}

export default App;
