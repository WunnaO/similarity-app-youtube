"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

const SignOutButton = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutFC = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      //   toast({
      //     title: "Error signing out",
      //     message: "Please try again later",
      //     type: "error",
      //   });
    }
  };

  return (
    <Button onClick={signOutFC} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
