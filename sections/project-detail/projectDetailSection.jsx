import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { PROJECT_FILTERED } from '../../gql/projectFilteredBySlug';
import style from './projectDetailSection.module.scss';

const ProjectDetailSection = ({ slug }) => {
  const { loading, error, data } = useQuery(PROJECT_FILTERED, {
    variables: { slug },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;

  return (
    <>
      <section className={style['project-detail']}>
        <h1>hey {data.name}</h1>
      </section>
    </>
  );
};

ProjectDetailSection.defaultProps = {
  slug: '',
};

ProjectDetailSection.propTypes = {
  slug: PropTypes.string,
};

export default ProjectDetailSection;
