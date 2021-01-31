import React from 'react';
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

  return sectionList.map((data) => (
    <button
      key={data.slug}
      type="button"
      className={style['main-navigation__button']}
    >
      {data.label}
    </button>
  ));
};

MainNavigationComponent.propTypes = {};

export default MainNavigationComponent;
