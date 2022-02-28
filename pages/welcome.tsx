import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCookies } from "react-cookie";

const Welcome: NextPage = () => {
  const [
    {
      qid: { first_name, last_name },
    },
  ] = useCookies(["qid"]);

  return (
    <>
      <Heading>
        Hello, {first_name} {last_name}
      </Heading>
    </>
  );
};
export default Welcome;
