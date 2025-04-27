import React from "react";

export const metadata = {
  title: "Game Mano | Auth ",
  description: "",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
