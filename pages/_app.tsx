import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}

export default App;
