import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import OverviewTable from "../component/OverviewTable";
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
      <OverviewTable overviews={overviews} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const overviews = await getOverview();

  return {
    props: {
      overviews,
    },
  };
};

export default Home;
