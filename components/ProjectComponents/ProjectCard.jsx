import { SlCalender } from "react-icons/sl";
import { BsPlayFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="shadow-lg project-card">
    <div className="h-[200px]">
      <Image
        height={150}
        width={300}
        src={project.projectImage.url}
        alt="Project"
        className=" transition-all hover:scale-95 h-full w-full object-cover"
      />
    </div>
      <div className="lg:p-4 md:p-3 sm:p-2">
    <h2 className="lg:text-2xl md:text-2xl sm:text-xl lg:mb-2">
      {project.title}
    </h2>
    <p className="flex items-center text-gray-600">
      <span className="mr-2">{<SlCalender />}</span>
      <span>{project.date}</span>
    </p>

    <p className="lg:mb-2">{project.description.slice(0,60) + "..."}</p>

    <div className="mb-8">
      {project.tags.map((tag, idx) => (
        <div
          className="px-2 md:px-4 py-2 bg-gray-200 text-black w-fit text-xs rounded-md mr-2 whitespace-nowrap inline"
          key={idx}
        >
          {tag}
        </div>
      ))}
    </div>
    <div className="flex">
      <Link
        target="_blank"
        href={project.demoLink ? project.demoLink : "#"}
        className="flex items-center border border-black px-4 py-2 w-fit rounded-md mr-2 hover:bg-black hover:text-white transition-all"
      >
        <span className="mr-2 text-2xl">{<BsPlayFill />}</span>
        <span>Demo</span>
      </Link>

      <Link
        target="_blank"
        href={project.sourceCode ? project.sourceCode : "#"}
        className="flex items-center border border-black px-4 py-2 w-fit rounded-md mr-2 hover:bg-black hover:text-white transition-all"
      >
        <span className="mr-2 text-2xl">{<AiFillGithub />}</span>
        <span>Source code</span>
      </Link>
    </div>
      </div>
    </div>
    
  );
};

export default ProjectCard;
