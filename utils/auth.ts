import md5 from "md5";
import { prisma } from "../prisma/client";

const validateAuth = async (usernameOrEmail: string, password: string) => {
  const shouldUseEmail = usernameOrEmail.includes("@");
  const validationColumn = shouldUseEmail ? "email" : "username";
  const user = await prisma.ilance_users.findFirst({
    where: { [validationColumn]: usernameOrEmail },
  });
  if (!user) throw new Error("User not found.");

  const hashedPassword = md5(md5(password) + user.salt);
  if (hashedPassword !== user.password) throw new Error("Password incorrect.");
  return user;
};
export default validateAuth;
