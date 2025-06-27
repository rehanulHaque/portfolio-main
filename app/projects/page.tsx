import ProjectCard from '@/components/ProjectComponents/ProjectCard';
import { getProjectsData } from '@/hooks';
// import { getProjectsData } from '@/hooks/getProjects';
import { Suspense } from 'react';

// Loading component for Suspense fallback
const ProjectsLoading = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-semibold text-2xl mb-8">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="animate-pulse bg-gray-200 rounded-lg h-64"></div>
      ))}
    </div>
  </div>
);

const ProjectsPage = async () => {
  const projectData = await getProjectsData();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Projects
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsPage />
    </Suspense>
  );
};

export default Page;

export const revalidate = 30;