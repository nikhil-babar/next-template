import type { Project as ProjectPrisma, Video } from "@prisma/client";

export interface Project extends ProjectPrisma {
  videos?: Video[];
}
