import { Video } from "@prisma/client";
import VideoCard from "./Video";
import { getProjectById } from "@/app/_lib/projects";
import { Suspense } from "react";

export function VideoList({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <>
        <h1>No video available!</h1>
      </>
    );
  }
  return (
    <>
      <div>
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </>
  );
}

export async function VideoListLoader({ projectId }: { projectId: string }) {
  const project = await getProjectById(projectId);

  if (!project?.videos) {
    return (
      <>
        <h1>No video available!</h1>
      </>
    );
  }
  return (
    <>
      <VideoList videos={project?.videos} />
    </>
  );
}

export default function VideoListSuspence({
  videos,
  projectId,
}: {
  videos: Video[] | undefined;
  projectId: string;
}) {
  if (videos) {
    return <VideoList videos={videos} />;
  }

  return (
    <>
      <Suspense fallback={<h1>Loading videos</h1>}>
        <VideoListLoader projectId={projectId} />
      </Suspense>
    </>
  );
}
