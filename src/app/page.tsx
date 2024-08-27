"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

return (
  <div className="text-emerald-900 font-mono text-2xl">
    Logged In
    <Button onClick={() => signOut}>
      Sign out
    </Button>
  </div>
);
};
