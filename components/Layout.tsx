import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <>
      {<Navbar />}
      <main style={{ marginTop: '68px' }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
