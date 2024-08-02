import { Project } from "@prisma/client";
import ProjectComponent from "./Project";
import { getProjects } from "@/app/_lib/projects";
import { Suspense } from "react";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="max-w-md divide-y divide-gray-700 p-4">
      {projects.map((project) => {
        return <ProjectComponent key={project.id} project={project} />;
      })}
    </ul>
  );
}

export async function ProjectListLoader() {
  const projects = await getProjects();
  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <ProjectList projects={projects} />
      </Suspense>
    </>
  );
}

export default function ProjectListSuspence({
  projects,
}: {
  projects: Project[] | null;
}) {
  if (projects) {
    return <ProjectList projects={projects} />;
  }

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <ProjectListLoader />
    </Suspense>
  );
}
