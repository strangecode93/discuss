import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import {prisma} from "@/lib/index"

if(!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET')
}

export const {handlers:{GET, POST}, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session && user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
});