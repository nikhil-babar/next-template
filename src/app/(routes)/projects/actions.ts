"use server";

import client from "../../../../prisma/db";
import { ProjectSchema } from "./schema";
import { revalidatePath } from "next/cache";

export async function createProjectAction(data: ProjectSchema) {
  try {
    await client.project.create({
      data,
    });

    revalidatePath("/projects");
  } catch (error) {
    console.log("Error while creating project!");
    throw error;
  }
}
