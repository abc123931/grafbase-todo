import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      idToken: true,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {},
});
