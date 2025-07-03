"use client"
import { Button } from "@/components/ui/button"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function page() {
    const [product, setProduct] = useState<any>()
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const response = await axios.get("/api/user/orders")
            setProduct(response.data.result)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className="mb-8">
                <h1 className="font-bold text-xl">My Orders</h1>
            </div>
            <div>
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="animate-pulse bg-gray-200 rounded-lg w-full h-[100px] sm:h-[100px] md:h-[200px]"></div>
                    ))
                ) : (
                    <div className="flex gap-4 flex-col">
                        {product.map((item: any) => (
                            <div key={item.id} className="flex md:flex-row flex-col gap-4 md:items-center items-start justify-between bg-gray-200 rounded-md p-4">
                                <div>
                                    <Image src={item.product.image.url || ""} alt={item.title} width={300} height={200} className='w-full h-[150px] md:h-[300px] object-cover rounded-xl' />

                                </div>
                                <div className="flex gap-4 items-start flex-col">
                                    <h1 className="font-bold text-xl">{item.product.title}</h1>
                                    <p>Payment Status: {item.paymentStatus}</p>
                                    <Link href={item.product.downloadUrl} target="_blank"><Button>Generate Link</Button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
