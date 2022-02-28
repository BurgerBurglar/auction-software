import {
  AtSignIcon,
  CheckIcon,
  InfoOutlineIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
interface Props {}
const Login: NextPage<Props> = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, { toggle: toggleIsPasswordVisible }] = useBoolean();
  const passwordType = isPasswordVisible ? "text" : "password";
  const toggleIcon = isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />;

  const toast = useToast();
  const handleForgot = () => {
    toast({
      status: "error",
      title: "Yeah that doesn't work.",
      description:
        "This is a job interview project. Ain't no time for implementing emails.",
      isClosable: true,
    });
  };

  const auth = async () => {
    const response = await axios.post<boolean>("/api/validate", {
      usernameOrEmail,
      password,
    });
    return response.data;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth().then(console.log);
  };

  return (
    <>
      <Head>
        <title>Login - Auction Software</title>
      </Head>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minH="100vh"
      >
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={8}
            justify="space-between"
            bgColor="purple.50"
            color="purple.700"
            border="1px"
            borderColor="gray.200"
            shadow="lg"
            px={5}
            py={16}
          >
            <Center flexDirection="column">
              <Image src="/logo.webp" alt="logo" width={200} height={200} />
              <Heading fontSize="1.5rem" mt={3}>
                Auction Software
              </Heading>
            </Center>
            <InputGroup>
              <InputLeftElement>
                <AtSignIcon />
              </InputLeftElement>
              <Input
                placeholder="Username / Email"
                variant="flushed"
                focusBorderColor="purple.400"
                _placeholder={{
                  color: "purple.300",
                }}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon />
              </InputLeftElement>
              <Input
                placeholder="Password"
                type={passwordType}
                variant="flushed"
                focusBorderColor="purple.400"
                _placeholder={{
                  color: "purple.300",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightAddon bgColor="transparent" border="none" p={0}>
                <IconButton
                  icon={toggleIcon}
                  colorScheme="purple"
                  variant="ghost"
                  aria-label="password visibility toggle"
                  onClick={toggleIsPasswordVisible}
                />
              </InputRightAddon>
            </InputGroup>
            <HStack>
              <Button
                type="button"
                leftIcon={<InfoOutlineIcon />}
                colorScheme="purple"
                variant="outline"
                w="full"
                onClick={handleForgot}
              >
                Forgot password
              </Button>
              <Button
                type="submit"
                leftIcon={<CheckIcon />}
                colorScheme="purple"
                w="full"
              >
                Login
              </Button>
            </HStack>
          </Stack>
        </form>
      </Container>
    </>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: {} };
};
export default Login;
