import React from 'react';
import TechnologiesListComponent from '../../components/technologiesList/technologiesList';
import ProjectListComponent from '../../components/projectsList/projectsList';
import style from './projectSection.module.scss';

const ProjectsSectionComponent = () => (
  <section className={style['project-section']} id="project">
    <h3 className={style['project-section__title']} >Liste des projets</h3>
    <TechnologiesListComponent />
    <ProjectListComponent />
  </section>
);

export default ProjectsSectionComponent;
