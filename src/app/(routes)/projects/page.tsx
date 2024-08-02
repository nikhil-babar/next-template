import { getProjects } from "@/app/_lib/projects";
import Project from "./Project";
import CreateProject from "./CreateProject";

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <>
      <div>
        <CreateProject />
        <ul className="max-w-md divide-y divide-gray-700 p-4">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </>
  );
}
