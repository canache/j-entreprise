import { ProjectPage, projectMetadata } from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

const project = getProject("extension-maison-la-rochelle");

export const metadata = projectMetadata(project);

export default function Page() {
  return <ProjectPage project={project} />;
}
