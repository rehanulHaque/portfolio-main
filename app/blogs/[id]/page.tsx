import { getBlog } from "@/hooks";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";



const BlogPage = async (params: {params: {id: string}}) => {
  const blogPageData = await getBlog(params.params.id)
  return (
    <div className="p-8">
      <div className="sm:w-full lg:w-1/2 block m-auto ">
        <img src={blogPageData.image?.url} alt="" className='w-full object-contain'/>
      </div>
      <div className="">
        <h1 className='text-3xl font-semibold mt-6 text-center'>{blogPageData.title}</h1>
        <div className="mt-8 mx-auto data prose">
          <div dangerouslySetInnerHTML={{__html: blogPageData.body?.html}}></div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link
          href="https://instagram.com/rehan_._cr"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaInstagram />}
        </Link>
        <Link
          href="https://github.com/rehanulHaque"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaGithub />}
        </Link>
        <Link
          href="https://twitter.com/MdRehan_CR"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaTwitter />}
        </Link>
        <Link
          href="https://www.linkedin.com/in/mdrehanulhaque1/"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaLinkedin />}
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
export const revalidate = 30