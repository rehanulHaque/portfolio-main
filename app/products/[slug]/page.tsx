
export default async function page({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  return (
    <div className="container mx-auto px-4 py-8">
      {slug}
      <h1 className="font-bold text-xl text-center">Under Development</h1>
    </div>
  )
}
