import { useQuery } from "@apollo/react-hooks";
import { PROJECT_LISTS } from "../gql/projectList";
import ProjectListComponent from "../sections/ProjectListComponent";

const ProjectsPage = () => <ProjectListComponent />;

export default ProjectsPage;
