import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import ui from '../../styles/ui.module.scss';
import Layout from '../../interface/components/Layout';
import styles from '../../styles/Login.module.scss';

import { BiKey } from 'react-icons/bi';
import { IoAppsSharp } from 'react-icons/io5';

export default function Index() {
  return (
    <>
      <Head>
        <title>Movielist - Login</title>
      </Head>
      <Layout>
        <Container className='d-flex justify-content-center'>
          <div
            className='pt-5 mt-5'
            style={{ maxWidth: '450px', width: '100%' }}
          >
            <div
              className={`card mb-4 card-hover ${ui.card} w-100 ${styles.login}`}
            >
              <div className={`${ui.cardBody} + ${styles.cardBody}`}>
                <h1 className='mb-2 text-truncate-line-2'>Sign In</h1>
                <form className='pt-4'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter your username'
                      name='username'
                    />
                  </div>
                  <div className='mb-4'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Enter your password'
                      name='password'
                    />
                  </div>
                  <button type='button' className='btn mt-5'>
                    Sign In
                  </button>
                  <div className='mt-3 form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='exampleCheck1'
                      name='remember-me'
                    />
                    <label className='form-check-label'>Remember me</label>
                  </div>
                </form>
              </div>
              <div className={`${ui.cardFooter} ${styles.cardFooter} pt-4`}>
                <div className='row align-items-center no-gutters'>
                  <div className='col-12 d-flex align-items-center justify-content-between'>
                    <hr />
                    <p
                      className='m-0 mx-2 text-center'
                      style={{
                        color: 'var(--border-color)',
                      }}
                    >
                      or continue with
                    </p>
                    <hr />
                  </div>
                  <div className='row pe-0 pt-3 d-flex justify-content-center'>
                    <div className='col-9'>
                      <button className='btn dark'>
                        <BiKey className='me-2' /> access with token
                      </button>
                    </div>
                    <div className='col-3 pe-0'>
                      <button className='btn dark'>
                        <IoAppsSharp />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
