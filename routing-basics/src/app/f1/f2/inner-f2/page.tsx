import Link from "next/link";

export default function InnerF2() {
  return (
    <div>
      Inner F2 page
      <br />
      <Link href="/f5" className="text-blue-500 hover:underline">
        Go to F5
      </Link>
    </div>
  );
}
