import React from 'react';
import Image from 'next/image';
import style from './mainNavigation.module.scss';

const MainNavigationComponent = () => {
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
      slug: 'Knowledge',
    },
  ];

  const sectionData = sectionList.map((data) => (
    <button
      key={data.slug}
      type="button"
      className={style['main-navigation__button']}
    >
      {data.label}
    </button>
  ));

  return (
    <div className={style['main-navigation']}>
      <div className={style['main-navigation__image']}>
        <Image
          width="32"
          height="39"
          src="/assets/images/alexandre-poupart-logo-white.svg"
          alt="Logo associés a mon nom"
        />
        <p className={style['main-navigation__image-title']}>
          Alexandre Poupart
          <span>Développeur Front-End</span>
        </p>
      </div>
      <div className={style['main-navigation__wrapper']}>{sectionData}</div>
    </div>
  );
};

MainNavigationComponent.propTypes = {};

export default MainNavigationComponent;
