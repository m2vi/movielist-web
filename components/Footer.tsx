import Container from 'react-bootstrap/Container';

export default () => {
  return (
    <footer className='mt-6'>
      <Container className='d-flex justify-content-between w-100'>
        <div className='row align-items-center no-gutters border-top py-2 w-100'>
          <div className='col-md-6 col-12 text-center text-md-start'>
            <span>© 2021 M2Z. All Rights Reserved.</span>
          </div>
          <div className='col-12 col-md-6'>
            <nav className='nav nav-footer justify-content-center justify-content-md-end'>
              <a className='nav-link active pl-0' href='#!'>
                Privacy
              </a>
              <a className='nav-link' href='#!'>
                Terms
              </a>
              <a className='nav-link' href='#!'>
                Feedback
              </a>
              <a className='nav-link' href='#!'>
                Support
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
};
