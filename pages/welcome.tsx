import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Welcome: NextPage = () => {
  const [{ qid }] = useCookies(["qid"]);
  const first_name = qid?.first_name;
  const router = useRouter();

  if (first_name === undefined && typeof window !== "undefined")
    router.replace("/login");

  return (
    <>
      <Heading>Hello, {first_name}.</Heading>
    </>
  );
};
export default Welcome;
