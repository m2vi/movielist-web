import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <>
      {/* {<Navbar />} */}
      <main className='pt-5'>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
