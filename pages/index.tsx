import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/ui/Container';

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>instagram</title>
        <meta name="description" content="instagram" />
      </Head>

      <Container>
        <h1>메인페이지</h1>
      </Container>
      <footer></footer>
    </div>
  );
};

export default Main;
