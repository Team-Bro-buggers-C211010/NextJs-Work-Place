import { cookies } from "next/headers";

export default async function About() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log("Current theme:", theme?.value);
  return (
    <div>
      <h1>About page load on: {new Date().toLocaleString()}</h1>
    </div>
  );
}
