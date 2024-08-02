import { getProjectById } from "@/app/_lib/projects";
import { Project } from "@/app/_lib/types";
import VideoListSuspence from "./VideoListSuspense";
import { isInitialRender } from "@/app/_lib/utils";

export default async function ProjectPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let project: Project | null = null;

  if (isInitialRender()) {
    project = await getProjectById(params.id);
  }

  if (project && (!project.videos || project.videos.length === 0)) {
    return (
      <>
        <h1>No videos available!</h1>
      </>
    );
  }

  return (
    <>
      <VideoListSuspence videos={project?.videos} projectId={params.id} />
    </>
  );
}
