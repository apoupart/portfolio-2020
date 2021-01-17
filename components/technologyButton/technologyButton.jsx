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
import style from './technologyButton.module.scss';

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

const TechnologyButtonComponent = ({
  onClickEvent,
  selectedTechnology,
  technology,
}) => {
  const onClickButton = () => {
    onClickEvent(technology.slug);
  };

  const icon = technology.icon_name ? (
    <FontAwesomeIcon
      className={style['technology-button__icon']}
      icon={['fab', technology.icon_name]}
    />
  ) : (
    <FontAwesomeIcon
      className={style['technology-button__icon']}
      icon={faCode}
    />
  );

  return (
    <button
      type="button"
      className={[
        style['technology-button'],
        selectedTechnology === technology.slug &&
          style['technology-button--is-active'],
      ].join(' ')}
      onClick={() => onClickButton()}
      data-technology={technology.slug}
    >
      {icon}
      {technology.name}
    </button>
  );
};

TechnologyButtonComponent.defaultProps = {
  onClickEvent: () => {},
  selectedTechnology: '',
};

TechnologyButtonComponent.propTypes = {
  onClickEvent: PropTypes.func,
  selectedTechnology: PropTypes.string,
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon_name: PropTypes.string,
  }).isRequired,
};

export default TechnologyButtonComponent;
