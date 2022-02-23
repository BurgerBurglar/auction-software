import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getOverview } from "../prisma/queries";
import { Overview } from "../types";

interface Props {
  overviews: Overview[];
}

const Home: NextPage<Props> = ({ overviews }) => {
  return (
    <>
      <Head>
        <title>Auction Software</title>
        <meta
          name="description"
          content="A merchandise management system for Auction Software"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(overviews, null, 2)}</pre>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const overviews: Overview[] = await getOverview();

  return {
    props: {
      overviews,
    },
  };
};

export default Home;
