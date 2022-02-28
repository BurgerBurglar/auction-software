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
