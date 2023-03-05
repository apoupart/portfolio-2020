import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './headerBanner.module.scss';
import { skipToSection } from '../../services/skipToSection';
import { wysiwygToHtmlParser } from '../../services/utils';
import { useOnScreen } from '../../hooks/useOnScreen';

const onScrollClick = () => {
  skipToSection('about-me');
};

const HeaderBannerComponent = ({ data }) => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  return (
  <header className={style['header-banner']}>
    <div className={style['header-banner__content']}>
      <div className={style['header-banner__title-section']} ref={elementRef}>
        <h1
          className={`${style['header-banner__title']} ${ isOnScreen && style['header-banner__title--visible']}`}
          // dangerouslySetInnerHTML={{
          //   __html: wysiwygToHtmlParser(data?.title, true),
          // }}
        >
          {[wysiwygToHtmlParser(data?.title, true)]}
          </h1>
        <h2
          className={style['header-banner__subtitle']}
        >
          {[wysiwygToHtmlParser(data?.description, true)]}
        </h2>
      </div>
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
    <ParallaxBanner
      layers={[{ image: data?.banner?.url, speed: -15 }]}
      className={style['header-banner__background']}
    />
  </header>
  );
}

HeaderBannerComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    banner: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default HeaderBannerComponent;
