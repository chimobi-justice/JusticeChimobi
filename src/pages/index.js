import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('../components/Landing'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Justice C.</title>
      </Head>
      <Landing />
    </>
  );
};

export default IndexPage;
