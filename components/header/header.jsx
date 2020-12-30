import React from 'react';
import PropTypes from 'prop-types';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './header.module.scss';
import SkipToSectionService from '../../services/skipToSection';

const onScrollClick = () => {
  SkipToSectionService.skipToSection('about-me');
};

const HeaderComponent = ({ bannerUrl }) => (
  <header className={style.header}>
    <div className={style.header__content}>
      <div className={style['header__title-section']}>
        <h1 className={style.header__title}>Alexandre Poupart</h1>
        <h2 className={style.header__subtitle}>
          Développeur Front-End <span>&#47;&#47;</span> Full-Stack
        </h2>
      </div>
      <button
        type="button"
        aria-hidden="true"
        className={style['header__button-icon-down']}
        onClick={onScrollClick}
      >
        <FontAwesomeIcon
          className={style['header__icon-down']}
          icon={faAngleDown}
        />
      </button>
    </div>
    <div
      className={style.header__background}
      style={{
        backgroundImage: `url(${bannerUrl})`,
      }}
    />
  </header>
);

HeaderComponent.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
};

export default HeaderComponent;
