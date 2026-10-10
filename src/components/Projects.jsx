import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white border-b-4 border-blue-500 inline-block pb-1 mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              short={project.short}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
