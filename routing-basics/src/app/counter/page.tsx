"use client";

import { useState } from "react";

// export const metadata = {  
//     title: "Counter",
// }

// Error:   × You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
