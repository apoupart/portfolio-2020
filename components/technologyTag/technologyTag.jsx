import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import style from './technologyTag.module.scss';

const TechnologyTagComponent = ({ technology }) => {
  const icon = technology.icon_name ? (
    <FontAwesomeIcon
      className={style['technology-tag__icon']}
      icon={['fab', technology.icon_name]}
    />
  ) : (
    <FontAwesomeIcon className={style['technology-tag__icon']} icon={faCode} />
  );

  return (
    <div className={style['technology-tag']} data-technology={technology.slug}>
      {icon}
      {technology.name}
    </div>
  );
};

TechnologyTagComponent.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon_name: PropTypes.string,
  }).isRequired,
};

export default TechnologyTagComponent;
