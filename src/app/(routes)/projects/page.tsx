import { getProjects } from "@/app/_lib/projects";
import type { Project } from "@prisma/client";
import CreateProject from "./CreateProject";
import ProjectListSuspence from "./ProjectListSuspence";
import { isInitialRender } from "@/app/_lib/utils";

export default async function ProjectPage() {
  let projects: Project[] | null = null;

  if (isInitialRender()) {
    projects = await getProjects();
  }

  return (
    <>
      <div>
        <CreateProject />
        <ProjectListSuspence projects={projects} />
      </div>
    </>
  );
}
