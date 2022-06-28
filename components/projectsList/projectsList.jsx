import React, { useContext } from 'react';
import { find } from 'lodash';
import ProjectCardComponent from '../projectCard/projectCard';
import ProjectContext from '../../context/project-context';
import style from './projectsList.module.scss';

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
              find(project.data.relatedTechnologies, {
                technology: {
                  uid: selectedTechnology,
                },
              })
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
