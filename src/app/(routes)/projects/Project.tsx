import type { Project } from "@prisma/client";

export default function Project({ project }: { project: Project }) {
  return (
    <>
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {project.title}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {project.description}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <p>{project.createdAt.toLocaleString()}</p>
          </div>
        </div>
      </li>
    </>
  );
}
