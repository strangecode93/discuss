"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";

const AuthHeader = () => {
  const session = useSession();
  if(!session.data?.user) return null;
  let authContent: React.ReactNode;
  if (session.data?.user) {
    authContent = (
        
      <Popover>
        <PopoverTrigger>
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.data.user?.image} alt="@shadcn" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm pb-2 font-bold">{session.data.user?.name}</p>
          <Separator className="mb-2" />
          <form action={signOut}>
          <Button
            variant={"outline"}
            type="submit"
            className="font-bold w-full"
          >
            sign-out
          </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
        <>
      <form action={signIn}>
        <Button type="submit" className="font-bold">
          <span className="flex items-center gap-2">
            sign-in
            <Github />
          </span>
        </Button>
      </form>
      </>
    );
  }
  return authContent;
};

export default AuthHeader;
