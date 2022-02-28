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
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
interface Props {}
const Login: NextPage<Props> = () => {
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
              leftIcon={<InfoOutlineIcon />}
              colorScheme="purple"
              variant="outline"
              w="full"
              onClick={handleForgot}
            >
              Forgot password
            </Button>
            <Button leftIcon={<CheckIcon />} colorScheme="purple" w="full">
              Login
            </Button>
          </HStack>
        </Stack>
      </Container>
    </>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: {} };
};
export default Login;
