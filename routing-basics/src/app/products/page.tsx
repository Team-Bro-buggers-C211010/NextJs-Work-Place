import Link from "next/link";

export default function Product() {
  return (
    <div>
        <h1>Products Page</h1>
        <ul>
            <Link href={`/products/1`}>Product 1</Link>
            <Link href={`/products/2`}>Product 2</Link>
            <Link href={`/products/3`} replace >Product 3</Link>
            {/* replace is used to replace the current history entry with the new one, instead of adding a new entry to the history stack. */}
        </ul>
    </div>
  )
}
