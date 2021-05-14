import React, { useRef, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './mainNavigation.module.scss';
import HamburgerButtonComponent from '../hamburgerButton/hamburgerButton';
import { skipToSection } from '../../services/skipToSection';
import LanguageSwitcherComponent from '../languageSwitcher/languageSwitcher';

const MainNavigationComponent = () => {
  const navigation = useRef(null);
  const [isMenuOpened, setMenuOpen] = useState(false);
  const router = useRouter();
  const getOtherLocal = router.locales.filter((local) => {
    console.log('local--', local, router);
    return local !== router.locale;
  });

  const jumpToSection = (sectionName) => {
    if (isMenuOpened) {
      setMenuOpen(false);
    }
    skipToSection(sectionName);
  };

  const sectionList = [
    {
      label: 'À Propos',
      slug: 'about-me',
    },
    {
      label: 'Projets',
      slug: 'project',
    },
    {
      label: 'Connaissances',
      slug: 'knowledge',
    },
  ];

  const sectionData = sectionList.map((data) => (
    <button
      key={data.slug}
      type="button"
      onClick={() => {
        jumpToSection(data.slug);
      }}
      className={style['main-navigation__button']}
    >
      {data.label}
    </button>
  ));

  return (
    <div className={style['main-navigation']}>
      <div className={style['main-navigation__image']}>
        <img
          width="32"
          height="39"
          src="//res.cloudinary.com/apoupart/image/upload/v1612621299/alexandre-poupart-logo-white_kstkpm.svg"
          alt="Logo associés a mon nom"
        />
        <p className={style['main-navigation__image-title']}>
          Alexandre Poupart
          <span>Développeur Front-End</span>
        </p>
      </div>
      <HamburgerButtonComponent
        onClickEvent={() => setMenuOpen(!isMenuOpened)}
      />
      <div
        className={[
          style['main-navigation__wrapper'],
          !!isMenuOpened && style['main-navigation__wrapper--is-open'],
        ].join(' ')}
        aria-hidden={!isMenuOpened}
        ref={navigation}
      >
        {sectionData}
        <button
          className={style['main-navigation__close']}
          onClick={() => setMenuOpen(!isMenuOpened)}
          type="button"
          aria-label="Fermer le menu"
          tabIndex="0"
          onBlur={() => {
            navigation.current.querySelector('button').focus();
          }}
        >
          <FontAwesomeIcon icon={faTimes} aria-hidden="false" />
        </button>
      </div>
    </div>
  );
};

MainNavigationComponent.propTypes = {};

export default MainNavigationComponent;
