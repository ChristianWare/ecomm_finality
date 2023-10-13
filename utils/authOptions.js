import { CredentialsProvider } from "next-auth/providers";
import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalid email or pssword");
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};