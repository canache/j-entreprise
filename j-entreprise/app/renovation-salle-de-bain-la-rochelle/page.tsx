import { ProjectPage, projectMetadata } from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

const project = getProject("renovation-salle-de-bain-la-rochelle");

export const metadata = projectMetadata(project);

export default function Page() {
  return <ProjectPage project={project} />;
}
