import React, { useState } from 'react';
import TechnologiesListComponent from '../../components/technologiesList/technologiesList';
import ProjectListComponent from '../../components/projectsList/projectsList';
import style from './projectSection.module.scss';

const ProjectsSectionComponent = () => {
  const [technology, setTechnology] = useState(null);
  const clickOnChild = (e) => {
    if (technology !== e) {
      setTechnology(e);
    } else {
      setTechnology(null);
    }
  };
  return (
    <section className={style['project-section']}>
      <TechnologiesListComponent
        onClickEvent={(e) => clickOnChild(e)}
        selectedTechnology={technology}
      />
      <ProjectListComponent slug={technology} />
    </section>
  );
};

export default ProjectsSectionComponent;
