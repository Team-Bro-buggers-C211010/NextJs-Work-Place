"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Client Component Two");
  return <h1>Client Component Two</h1>;
};
