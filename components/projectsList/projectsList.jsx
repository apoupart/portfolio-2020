import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { PROJECT_LISTS } from "../../gql/projectList";
import { PROJECT_FILTERED } from "../../gql/projectFiltered";
import ProjectCard from "../projectCard/projectCard";
import { useState } from "react";
import TechnologiesListComponent from "../technologiesList/technologiesList";

const ProjectListComponent = ({ slug }) => {
  const { loading, error, data, refetch } = useQuery(PROJECT_FILTERED, {
    variables: { slug: slug },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;

  return (
    <>
      {data.projects.map((data) => (
        <ul key={data.id}>
          <li>
            <Link href={`/projets/${encodeURIComponent(data.slug)}`}>
              <>
                <ProjectCard project={data} />
              </>
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

ProjectListComponent.propTypes = {
    slug: PropTypes.string
  };

export default ProjectListComponent;
