import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import css from '../styles/Main.module.scss';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
