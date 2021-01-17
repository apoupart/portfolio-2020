import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faSass,
  faJava,
  faJsSquare,
  faPhp,
  faReact,
  faUnity,
  faVuejs,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import style from './technologyTag.module.scss';

/**
 * Add all the possible technology as font here.
 */
fontawesome.library.add(
  faPhp,
  faWordpressSimple,
  faUnity,
  faJava,
  faJsSquare,
  faReact,
  faHtml5,
  faSass,
  faCss3Alt,
  faVuejs
);

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
    <span className={style['technology-tag']} data-technology={technology.slug}>
      {icon}
      {technology.name}
    </span>
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
