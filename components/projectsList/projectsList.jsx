import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { PROJECT_FILTERED } from "../../gql/projectFiltered";
import ProjectCardComponent from "../projectCard/projectCard";
import style from "./projectsList.module.scss"

const ProjectListComponent = ({ slug }) => {
  const { loading, error, data, refetch } = useQuery(PROJECT_FILTERED, {
    variables: { slug: slug || undefined },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;

  return (
    <>
      <ul className={style["projects-list"]}>
        {data.projects.map((data) => (
          <li className={style["projects-list__item"]} key={data.id}>
            <ProjectCardComponent project={data} />
          </li>
        ))}
      </ul>
    </>
  );
};

ProjectListComponent.propTypes = {
    slug: PropTypes.string
  };

export default ProjectListComponent;
