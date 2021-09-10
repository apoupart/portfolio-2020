import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './headerBanner.module.scss';
import { skipToSection } from '../../services/skipToSection';

const onScrollClick = () => {
  skipToSection('about-me');
};

const HeaderBannerComponent = ({ bannerUrl }) => {
  const { t } = useTranslation('banner');
  return (
    <header className={style['header-banner']}>
      <div className={style['header-banner__content']}>
        <div className={style['header-banner__title-section']}>
          <h1 className={style['header-banner__title']}>{t('name')}</h1>
          <h2 className={style['header-banner__subtitle']}>
            {t('front-end-developper')}&nbsp;<span>&#47;&#47;</span>&nbsp;
            {t('full-stack-developper')}
          </h2>
        </div>
        <button
          type="button"
          aria-hidden="true"
          className={style['header-banner__button-icon-down']}
          onClick={onScrollClick}
        >
          <FontAwesomeIcon
            className={style['header-banner__icon-down']}
            icon={faAngleDown}
          />
        </button>
      </div>
      <div
        className={style['header-banner__background']}
        style={{
          backgroundImage: `url(${bannerUrl})`,
        }}
      />
    </header>
  );
};

HeaderBannerComponent.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
};

export default HeaderBannerComponent;
