import type { NextApiRequest, NextApiResponse } from "next";
import validateAuth from "../../utils/auth";

type Data = {
  isValid: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { usernameOrEmail, password } = req.body;
  const isValid = await validateAuth(usernameOrEmail, password);
  res.status(200).json({ isValid });
}
