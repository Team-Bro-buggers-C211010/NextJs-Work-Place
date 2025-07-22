import { getProducts } from "@/prisma-db";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts();
    return (
        <ul className="space-y-4 p-4">
            {products.map((product) => (
                <li
                    key={product.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <div>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                    </div>
                    <p>{product.description}</p>
                    <div className="text-lg font-medium">
                        <p>${product.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}