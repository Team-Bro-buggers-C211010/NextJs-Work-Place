import Link from "next/link";

export default function F1() {
  return (
    <div>
      F1 Page
      <br />
      <div className="flex space-x-2 mt-4">
        <Link href="/f1/f2" className="text-blue-500 hover:underline">
          Go to F2
        </Link>
        <Link href="/f3" className="text-blue-500 hover:underline">
          Go to F3
        </Link>
      </div>
    </div>
  );
}
