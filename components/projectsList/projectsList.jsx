import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { PROJECT_FILTERED } from '../../gql/projectFiltered';
import ProjectCardComponent from '../projectCard/projectCard';
import style from './projectsList.module.scss';

const ProjectListComponent = ({ slug }) => {
  const { loading, error, data } = useQuery(PROJECT_FILTERED, {
    variables: { slug: slug || undefined },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;

  return (
    <>
      <ul className={style['projects-list']}>
        {data.projects.map((project) => (
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
