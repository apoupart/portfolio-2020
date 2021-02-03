import React from 'react';
import PropTypes from 'prop-types';
import style from './hamburgerButton.module.scss';

const HamburgerButtonComponent = ({ onClickEvent }) => (
  <button
    className={style['hamburger-button']}
    onClick={onClickEvent}
    type="button"
  >
    <span>Ouvrir le menu</span>
  </button>
);

HamburgerButtonComponent.defaultProps = {
  onClickEvent: () => {},
};

HamburgerButtonComponent.propTypes = {
  onClickEvent: PropTypes.func,
};

export default HamburgerButtonComponent;
