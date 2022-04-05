import React, { useContext } from 'react';
// import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
// import { PROJECT_FILTERED_BY_TECH } from '../../gql/projectFilteredByTechSlug';
import ProjectCardComponent from '../projectCard/projectCard';
import style from './projectsList.module.scss';
import ProjectContext from '../../context/project-context';
import { createClient } from '../../prismicio';

const ProjectListComponent = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <>
      <h3 className="visually-hidden">Liste des projets</h3>
      <ul className={style['projects-list']}>
        {console.log('test', projects)}
        {projects &&
          projects.length &&
          projects.map((project) => (
            <li className={style['projects-list__item']} key={project.id}>
              <ProjectCardComponent project={project} />
            </li>
          ))}
        test
      </ul>
    </>
  );
};

export default ProjectListComponent;
