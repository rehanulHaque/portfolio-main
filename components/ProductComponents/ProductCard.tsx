import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Eye, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function ProductCard({ data }: { data: any }) {
    return (
        <div className='p-2 rounded-xl shadow-lg border '>
            <div className='overflow-hidden rounded-xl'>
                <Image src={data.image.url || ""} alt={data.title} width={300} height={200} className='w-full h-[250px] object-cover rounded-xl hover:scale-105 transition-all' />
            </div>
            <div className='py-2 px-3'>
                <div className='flex justify-between items-center py-2'>
                    <h1 className='font-semibold text-xl'>{data.title}</h1>
                    <Button variant={"outline"} className='text-xl flex gap-1 items-center'><IndianRupee/>{data.price || 0}</Button>
                </div>
                <p>{data.description.text.slice(0, 70) + "..."}</p>
                <Link href={`/products/${data.slug}`}><Button className='w-full mt-2 flex items-center gap-2'><Eye/> View</Button></Link>
            </div>
        </div>
    )
}
