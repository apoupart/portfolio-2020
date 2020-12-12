import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { PROJECT_LISTS } from "../gql/projectList";
import ProjectCard from "../components/projectCard/projectCard";
import { useState } from "react";
import TechnologiesListComponent from "../components/technologiesList/technologiesList";
import ProjectListComponent from "../components/projectsList/projectsList";
import { PROJECT_FILTERED } from "../gql/projectFiltered";

const ProjectsSectionComponent = () => {
  const [technology, setTechnology] = useState(null);
  const clickOnChild = (e) => {
    if (technology !== e) {
      setTechnology(e);
    } else {
      setTechnology(null);
    }
  };
  return (
    <>
      <TechnologiesListComponent onClickEvent={(e) => clickOnChild(e)} />
      <ProjectListComponent slug={technology} />
    </>
  );
};

export default ProjectsSectionComponent;
