import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import style from './technologyTag.module.scss';

const TechnologyTagComponent = ({ technology }) => {
  const icon = technology?.data?.iconName ? (
    <FontAwesomeIcon
      className={style['technology-tag__icon']}
      icon={['fab', technology?.data?.iconName]}
    />
  ) : (
    <FontAwesomeIcon className={style['technology-tag__icon']} icon={faCode} />
  );

  return (
    <div className={style['technology-tag']} data-technology={technology?.uid}>
      {icon}
      {technology?.data?.title}
    </div>
  );
};

TechnologyTagComponent.propTypes = {
  technology: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      iconName: PropTypes.string,
    }),
  }).isRequired,
};

export default TechnologyTagComponent;
