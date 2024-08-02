"use server";

import { createProject } from "@/app/_lib/projects";
import { ProjectSchema } from "./schema";
import { revalidatePath } from "next/cache";

export async function createProjectAction(data: ProjectSchema) {
  try {
    await createProject(data);
    revalidatePath("/projects");
  } catch (error) {
    console.log("Error while creating project!");
    throw error;
  }
}
