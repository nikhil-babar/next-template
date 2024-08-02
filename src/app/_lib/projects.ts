import { ProjectSchema } from "../(routes)/projects/schema";
import client from "../../../prisma/db";

export async function getProjects() {
  try {
    const res = await client.project.findMany({
      select: {
        id: true,
        description: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        videos: false,
      },
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("timeout");
      }, 3000);
    });

    return res;
  } catch (error: Error | any) {
    console.log("Error while fetching projects: ", error.message);
    throw error;
  }
}

export async function getProjectById(id: string) {
  try {
    const res = await client.project.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        description: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        videos: true,
      },
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("timeout");
      }, 3000);
    });

    return res;
  } catch (error: Error | any) {
    console.log("Error while fetching projects: ", error.message);
    throw error;
  }
}

export async function createProject(project: ProjectSchema) {
  try {
    const res = await client.project.create({
      data: project,
    });

    return res;
  } catch (error: Error | any) {
    console.log("Error while fetching projects: ", error.message);
    throw error;
  }
}
