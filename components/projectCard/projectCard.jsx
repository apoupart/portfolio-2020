import Link from "next/link";
import PropTypes from "prop-types";
import style from "./projectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projets/${encodeURIComponent(project.slug)}`}>
      <div
        className={style["project-card"]}
      >
        <div className={style["project-card__padding"]}></div>
        <img className={style["project-card__image"]} src={project.image[0].url} loading="lazy" aria-hidden="true" />
        <div className={style["project-card__wrapper"]}>
          <p className={style["project-card__title"]}>{project.title}></p>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.array
  }).isRequired,
};

export default ProjectCard;
