import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './navigationBar.module.scss';
import { hasWindowAvailable } from '../../services/utils';
import MainNavigationComponent from '../mainNavigation/mainNavigation';

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
          <Link href="/">
            <a href="/" className={style['navigation-bar__back-button']}>
              <FontAwesomeIcon
                aria-hidden="true"
                className={style['navigation-bar__icon-down']}
                icon={faArrowLeft}
              />
              <p>Retour</p>
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

NavigationBarComponent.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

export default NavigationBarComponent;
