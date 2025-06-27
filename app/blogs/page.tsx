import BlogCard from '@/components/BlogComponents/BlogCard';
import { getBlogsData } from '@/hooks';
import { Suspense } from 'react';


// Loading component for Suspense fallback
const BlogsLoading = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-semibold text-2xl mb-8">Blog</h1>
    <div className="space-y-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="animate-pulse bg-gray-200 rounded-lg h-40 sm:h-48 md:h-56"></div>
      ))}
    </div>
  </div>
);

const BlogsContent = async () => {
  const blogData = await getBlogsData();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Blog
        </h1>
        
        {blogData.length > 0 ? (
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No blog posts available at the moment.</p>
          </div>
        )}
        
        {/* Pagination could be added here if needed */}
        <div className="mt-12 flex justify-center">
          {blogData.length > 10 && (
            <div className="flex space-x-2">
              {/* Pagination component would go here */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

const Blogs = () => {
  return (
    <Suspense fallback={<BlogsLoading />}>
      <BlogsContent />
    </Suspense>
  );
};

export default Blogs;
export const revalidate = 30;