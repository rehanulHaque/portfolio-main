import ProductCard from "@/components/ProductComponents/ProductCard"
import { getProductsData } from "@/hooks"

export default async function page() {
  const data = await getProductsData()
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="font-bold text-2xl">
          Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
