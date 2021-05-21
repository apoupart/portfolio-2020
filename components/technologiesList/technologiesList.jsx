import React from 'react';
import PropTypes from 'prop-types';
import style from './technologiesList.module.scss';
import TechnologyButtonComponent from '../technologyButton/technologyButton';
import { TECHNOLOGIES } from '../../gql/technologies';
import { useGraphQLQuery } from '../../services/graphQl';

const TechnologiesListComponent = ({ onClickEvent, selectedTechnology }) => {
  const { loading, error, data } = useGraphQLQuery(TECHNOLOGIES);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading via TechnologiesLists...</h1>;
  return (
    <>
      <ul className={style['technologies-list']}>
        {data.technologies.map((technology) => (
          <li key={technology.id}>
            <TechnologyButtonComponent
              technology={technology}
              onClickEvent={onClickEvent}
              selectedTechnology={selectedTechnology}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

TechnologiesListComponent.defaultProps = {
  onClickEvent: () => {},
  selectedTechnology: '',
};

TechnologiesListComponent.propTypes = {
  onClickEvent: PropTypes.func,
  selectedTechnology: PropTypes.string,
};
export default TechnologiesListComponent;
