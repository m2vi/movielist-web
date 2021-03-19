import Head from 'next/head';

import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';

import ui from '../styles/ui.module.scss';

import { FaRegClock } from 'react-icons/fa';

import { IoBookmarkOutline, IoAppsSharp } from 'react-icons/io5';

import Topic from '../components/Topic';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movielist - Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container className='mt-5 pt-5'>
          <Topic title='Recommended to you' className='row'>
            <Col xs={4}>
              <Card
                icon=''
                title='The Python Course: build web application'
                duration='2h 45min'
                rating='3'
                contributor={{
                  name: 'm2v',
                  avatar:
                    'https://cdn.discordapp.com/avatars/701400631662870609/209310a4575835949e4b1d4d951e0aaf.png?size=512',
                }}
              />
            </Col>
            <Col xs={4}>
              <Card
                icon=''
                title='The Python Course: build web application'
                duration='2h 45min'
                rating='3'
                contributor={{
                  name: 'm2v',
                  avatar:
                    'https://cdn.discordapp.com/avatars/701400631662870609/209310a4575835949e4b1d4d951e0aaf.png?size=512',
                }}
              />
            </Col>
            <Col xs={4}>
              <Card
                icon=''
                title='The Python Course: build web application'
                duration='2h 45min'
                rating='3'
                contributor={{
                  name: 'm2v',
                  avatar:
                    'https://cdn.discordapp.com/avatars/701400631662870609/209310a4575835949e4b1d4d951e0aaf.png?size=512',
                }}
              />
            </Col>
            <Col xs={4}>
              <Card
                icon=''
                title='The Python Course: build web application'
                duration='2h 45min'
                rating='3'
                contributor={{
                  name: 'm2v',
                  avatar:
                    'https://cdn.discordapp.com/avatars/701400631662870609/209310a4575835949e4b1d4d951e0aaf.png?size=512',
                }}
              />
            </Col>
          </Topic>
        </Container>
      </Layout>
    </div>
  );
}
