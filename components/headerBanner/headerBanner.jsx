import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './headerBanner.module.scss';
import { skipToSection } from '../../services/skipToSection';
import {
  addSpanToText,
  wysiwygToHtmlParser,
  wysiwygToText,
} from '../../services/utils';
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
        <div
          className={`${style['header-banner__title-section']}  ${
            isOnScreen && style['header-banner__title-section--visible']
          }`}
          ref={elementRef}
        >
          <p className={style['header-banner__surtitle']}>Bonjour je suis</p>
          <h1 className={style['header-banner__title']}>
            {wysiwygToText(data?.title || '')}
          </h1>
          <h2
            className={style['header-banner__subtitle']}
            dangerouslySetInnerHTML={{
              __html: wysiwygToHtmlParser(data?.description, false),
            }}
          />
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
};

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
