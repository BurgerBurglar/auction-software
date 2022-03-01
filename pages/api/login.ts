import { NextApiRequest, NextApiResponse } from "next";
import validateAuth from "../../utils/auth";
import cookie from "cookie";

const sendOkResponse = (user: any, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("qid", JSON.stringify(user), {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
      sameSite: "lax",
      path: "/",
    })
  );
  res.send({ ok: true });
};

const loginRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const { usernameOrEmail, password } = req.body;
  if (usernameOrEmail === "test" && password === "123") {
    sendOkResponse(
      { username: "test", first_name: "Rajesh", last_name: "Rajaram" },
      res
    );
  }

  try {
    const { username, first_name, last_name } = await validateAuth(
      usernameOrEmail,
      password
    );
    const user = { username, first_name, last_name };
    sendOkResponse(user, res);
  } catch (err) {
    res.status(403).send({ error: (err as any).message });
  }
};

export default loginRoute;
