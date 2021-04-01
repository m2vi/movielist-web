import * as React from 'react';

import { QueryProvider } from '../../context/QueryContext';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default ({ children }) => {
  return (
    <QueryProvider query=''>
      <Navbar />
      <main style={{ marginTop: '68px' }}>{children}</main>
    </QueryProvider>
  );
};
