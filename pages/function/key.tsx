import { Component, useState } from 'react';
import Head from 'next/head';

import keyGen from '../../components/key';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

import styles from '../../styles/function.key.module.scss';

interface AbcState {
  inputValue: any;
}

function Key() {
  const [input, setInput] = useState(' ');
  const [output, setOutput] = useState(' ');

  const handleInput = (e: any) => {
    setInput(e.target.value);
    setOutput(JSON.stringify(keyGen(input), null, 2));
  };

  return (
    <>
      <Head>
        <title>Key Generator</title>
      </Head>
      <div className={styles.wrapper}>
        <div
          className={
            styles.inner + ' pt-10 w-100 d-flex justify-content-center'
          }
        >
          <form className='col-4'>
            <div className='mb-3'>
              <label className='form-label'>Moviename</label>
              <input
                type='text'
                className='form-control key-input'
                placeholder='Input'
                onChange={handleInput}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Key and more</label>
              <code className={`form-control language-json`}>{output}</code>
            </div>
            <div className='mb-3 form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                placeholder='Output'
              />
              <label className='form-check-label'>Check me out</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Key;
