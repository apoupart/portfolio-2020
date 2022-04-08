import React, { useContext } from 'react';
import ProjectCardComponent from '../projectCard/projectCard';
import style from './projectsList.module.scss';
import ProjectContext from '../../context/project-context';

const ProjectListComponent = () => {
  const { projects, selectedTechnology } = useContext(ProjectContext);
  return (
    <>
      <h3 className="visually-hidden">Liste des projets</h3>
      <ul className={style['projects-list']}>
        {projects &&
          projects.length &&
          projects.map((project) => {
            if (
              !selectedTechnology ||
              (project.data.relatedTechnology &&
                project.data.relatedTechnology?.uid === selectedTechnology)
            ) {
              return (
                <li className={style['projects-list__item']} key={project.id}>
                  <ProjectCardComponent project={project} />
                </li>
              );
            }
            return null;
          })}
      </ul>
    </>
  );
};

export default ProjectListComponent;
