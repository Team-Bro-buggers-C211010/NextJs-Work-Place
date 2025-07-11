import Link from "next/link";

export default function F2() {
  return (
    <div>
      F2 page
      <br />
      <Link href="/f4" className="text-blue-500 hover:underline">
        Go to F4
      </Link>
    </div>
  );
}
