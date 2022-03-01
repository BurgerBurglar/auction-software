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
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Login: NextPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, { toggle: toggleIsPasswordVisible }] = useBoolean();
  const passwordType = isPasswordVisible ? "text" : "password";
  const toggleIcon = isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />;

  const toast = useToast();
  const handleForgot = () => {
    toast({
      status: "error",
      title: "Yeah, that doesn't work.",
      description:
        "This is a job interview project. Ain't no time for implementing emails.",
      isClosable: true,
    });
  };

  const toastLoginError = (message: string) => {
    toast({
      status: "error",
      title: "That didn't work.",
      description: message,
      isClosable: true,
    });
  };

  const router = useRouter();

  const auth = async () => {
    try {
      await axios.post("/api/login", {
        usernameOrEmail,
        password,
      });
      router.push("/welcome");
    } catch (err) {
      if (!axios.isAxiosError(err)) return;
      const message: string = err.response?.data.error;
      toastLoginError(message);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth();
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
export default Login;
