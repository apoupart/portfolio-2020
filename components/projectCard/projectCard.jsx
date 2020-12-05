import Link from "next/link";
import PropTypes from "prop-types";
import style from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={style["project-card"]}
      style={{
        backgroundImage: `url(${project.image[0].url})`,
      }}
    >
      --{project.title}--
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape.isRequired,
};

export default ProjectCard;
