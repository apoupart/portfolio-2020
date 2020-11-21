import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { PROJECT_LISTS } from "../gql/projectList";

const ProjectListComponent = () => {
  const { loading, error, data } = useQuery(PROJECT_LISTS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;
  {
    console.log("data", data);
  }
  return (
    <>
      dkashdjkashd
      {data.projects.map((data) => (
        <ul key={data.id}>
          <li>
            <Link href={`/projets/${encodeURIComponent(data.slug)}`}>
              {data.title}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default ProjectListComponent;
