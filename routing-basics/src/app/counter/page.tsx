import Counter from './counter';
export const metadata = {  
    title: {
      absolute: 'Counter', // By using this the root template is not used
    },
}

// Error:   × You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/
export default function CounterPage() {
  return (
    <div>
      <Counter/>
    </div>
  );
}
