import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import style from './technologyButton.module.scss';

const TechnologyButtonComponent = ({
  onClickEvent,
  selectedTechnology,
  technology,
}) => {
  const onClickButton = () => {
    onClickEvent(technology);
  };

  const icon = technology.data.iconName ? (
    <FontAwesomeIcon
      className={style['technology-button__icon']}
      icon={['fab', technology.data.iconName]}
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
        selectedTechnology === technology.uid &&
          style['technology-button--is-active'],
      ].join(' ')}
      onClick={() => onClickButton()}
      data-technology={technology.uid}
    >
      {icon}
      {technology?.data?.title || ''}
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
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      iconName: PropTypes.string,
    }),
  }).isRequired,
};

export default TechnologyButtonComponent;
