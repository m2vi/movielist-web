import { Component, useEffect, useState } from 'react';
import Head from 'next/head';

import keyGen from '../../utils/key';

import SyntaxHighlighter from 'react-syntax-highlighter';
import SyntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';

import styles from '../../styles/function.key.module.scss';

function Key() {
  const [output, setOutput] = useState(' ');

  const handleInput = (e: any) => {
    setOutput(JSON.stringify(keyGen(e.target.value), null, 2));
  };

  useEffect(() => {
    setOutput(JSON.stringify(keyGen(''), null, 2));
  }, []);

  return (
    <>
      <Head>
        <title>Generator</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.inner + ' pt-10 w-50 flex justify-center'}>
          <form className='container'>
            <div className='mb-3'>
              <label className='form-label'>Moviename</label>
              <input
                type='text'
                className='form-control key-input'
                placeholder='input'
                onKeyUp={handleInput}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Actors</label>
              <input
                type='text'
                className='form-control key-input'
                placeholder='"," between actor'
                onKeyUp={handleInput}
              />
            </div>
            <div className='mb-3 form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                placeholder='Output'
              />
              <label className='form-check-label' onChange={handleInput}>
                Nudity
              </label>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Key and more</label>
              <SyntaxHighlighter language='json' style={SyntaxStyle}>
                {output}
              </SyntaxHighlighter>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Key;
