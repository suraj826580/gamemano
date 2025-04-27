"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth?.login);

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  // if (!isLoggedIn) return ;
  return <>{children}</>;
}
