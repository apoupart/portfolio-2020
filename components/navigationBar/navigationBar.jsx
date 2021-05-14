import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './navigationBar.module.scss';
import { hasWindowAvailable } from '../../services/utils';
import MainNavigationComponent from '../mainNavigation/mainNavigation';
import LanguageSwitcherComponent from '../languageSwitcher/languageSwitcher';

const NavigationBarComponent = ({ isHome }) => {
  const [isScrollingUp, setScrollingUp] = useState(true);
  let lastYPos = 0;

  useEffect(() => {
    function handleWindowScroll() {
      setScrollingUp(
        lastYPos >= window?.scrollY || window?.scrollY <= window.innerHeight
      );
      lastYPos = window?.scrollY || lastYPos;
    }

    if (hasWindowAvailable) {
      window.addEventListener('scroll', handleWindowScroll);
    }
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <nav
      className={[
        style['navigation-bar'],
        isScrollingUp && style['navigation-bar--scroll-up'],
      ].join(' ')}
    >
      <div className={style['navigation-bar__content']}>
        {isHome && <MainNavigationComponent />}
        {!isHome && (
          <>
            <Link href="/">
              <a className={style['navigation-bar__back-button']}>
                <FontAwesomeIcon
                  aria-hidden="true"
                  className={style['navigation-bar__icon-down']}
                  icon={faArrowLeft}
                />
                <p>Retour</p>
              </a>
            </Link>
          </>
        )}
        <LanguageSwitcherComponent />
      </div>
    </nav>
  );
};

NavigationBarComponent.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

export default NavigationBarComponent;
