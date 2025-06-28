import { Button } from "@/components/ui/button"
import { getSingleProduct } from "@/hooks"
import { CheckIcon, IndianRupee } from "lucide-react"
import Image from "next/image"

export default async function page({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const data = await getSingleProduct(slug)
  // console.log(data)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-16 md:max-h-screen">
        {/* left */}
        <div>
          <Image src={data.image.url || ""} alt={data.title} width={300} height={200} className='w-full h-[300px] md:h-[400px] object-cover rounded-xl hover:scale-105 transition-all' />
        </div>
        {/* Right */}
        <div className="flex gap-4 items-start justify-center flex-col">
          <h1 className="font-bold text-xl">{data.title}</h1>
          <div className="flex gap-4 items-center">
            <Button variant={"outline"} className="text-xl flex gap-1 items-center"><IndianRupee/>{data.price || 0}</Button>
          {data.isFree ? (
            <Button>Buy Now</Button>
          ) : (
            <Button variant={"secondary"}>Download Now</Button>
          )}
          </div>
          <div className="mt-8 mx-auto data prose">
            <h1 className="text-xl font-bold">Overview</h1>
            <p className="prose">{data.overview}</p>
          </div>
        </div>
      </div>
      <div className="md:mt-8 mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
          <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-xl">Features</h1>
            {data.features.map((item: string, idx: number) => (
              <p key={idx} className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md"><CheckIcon className="text-blue-500"/> {item}</p>
            ))}
          </div>
          <div>
            <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-xl">Pages Included</h1>
            {data.pagesIncluded.map((item: string, idx: number) => (
              <p key={idx} className="flex items-center gap-2 border-b border-gray-200 px-4 py-2 rounded-md"><CheckIcon className="text-blue-500"/> {item}</p>
            ))}
          </div>
          <div className="flex gap-2 flex-col md:mt-8 mt-4">
            <h1 className="font-bold text-xl">Highlight</h1>
            {data.highlights.map((item: string, idx: number) => (
              <p key={idx} className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md"><CheckIcon className="text-blue-500"/> {item}</p>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
}
