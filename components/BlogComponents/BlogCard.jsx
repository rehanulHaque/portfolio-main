import React from "react";
import Link from 'next/link';
import { ArrowRightIcon } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white">
      {/* Image Container */}
      <div className="w-full md:w-1/3 lg:w-1/4 h-48 sm:h-56 md:h-auto relative">
        <img 
          src={blog.image.url} 
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
        <div>
          <Link 
            href={`/blogs/${blog.blogUrl}`}
            className="font-semibold text-xl sm:text-2xl hover:text-blue-600 transition-colors duration-200 inline-block mb-2"
          >
            {blog.title}
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-3 sm:line-clamp-2 md:line-clamp-3">
            {blog.miniDescription}
          </p>
        </div>
        
        <div className="mt-auto">
          <Link 
            href={`/blogs/${blog.blogUrl}`}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
          >
            Read more
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;