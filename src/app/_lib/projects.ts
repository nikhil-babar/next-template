import client from "../../../prisma/db";

export async function getProjects() {
  try {
    const res = await client.project.findMany();
    return res;
  } catch (error: Error | any) {
    console.log("Error while fetching projects: ", error.message);
    throw error;
  }
}
