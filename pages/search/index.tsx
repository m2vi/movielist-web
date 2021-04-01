import Head from 'next/head';
import Layout from '../../interface/components/Layout';

import Container from 'react-bootstrap/Container';
import SearchContext, { QueryConsumer } from '../../context/QueryContext';
import { useContext } from 'react';

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Movielist - Home</title>
      </Head>
      <Layout>
        <QueryConsumer>
          {({ query, saveQuery }) => (
            <Container className='flex justify-center'>
              <div className='pt-10'>
                <p> Your search for "{query}" did not have any matches. </p>
                <p>Suggestions:</p>
                <ul>
                  <li>Try different keywords</li>
                  <li>Looking for a movie or TV show?</li>
                  <li>
                    Try using a movie, TV show title, an actor or the publisher
                  </li>
                  <li>Try a genre, like comedy, romance, sports, or drama</li>
                </ul>
              </div>
            </Container>
          )}
        </QueryConsumer>
      </Layout>
    </>
  );
}
