"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({ children }: {children: React.ReactNode}) => {
  const [name, setName] = useState("Client Component One");
  return (
    <>
      <h1>Client Component One</h1>
      <ClientComponentTwo />

      {/* Inner client component it is not allowed to access server component */}
      {/* <ServerComponentTwo /> */}
    
      {/* Render children, which can be server components */}
      {children}
    </>
  );
};
