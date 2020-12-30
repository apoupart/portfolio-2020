import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { PROJECT_FILTERED } from '../../gql/projectFilteredBySlug';
import ProjectCardComponent from '../projectCard/projectCard';
import style from './projectsList.module.scss';

const ProjectListComponent = ({ slug }) => {
  const { loading, error, data } = useQuery(PROJECT_FILTERED, {
    variables: { slug: slug || undefined },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  const loopArray = Array(6).fill('');
  const loadingCard =
    loading &&
    loopArray.map((project, index) => (
      <li className={style['projects-list__item']} key={index}>
        <ProjectCardComponent isLoading />
      </li>
    ));

  return (
    <>
      <h3 className="visually-hidden">Liste des projets</h3>
      <ul className={style['projects-list']}>
        {loadingCard}
        {data &&
          data.projects.map((project) => (
            <li className={style['projects-list__item']} key={project.id}>
              <ProjectCardComponent project={project} />
            </li>
          ))}
      </ul>
    </>
  );
};

ProjectListComponent.defaultProps = {
  slug: '',
};

ProjectListComponent.propTypes = {
  slug: PropTypes.string,
};

export default ProjectListComponent;
