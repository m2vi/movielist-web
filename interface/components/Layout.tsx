import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default ({ children }) => {
  return (
    <>
      {<Navbar />}
      <main style={{ marginTop: '68px' }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
