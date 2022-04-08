import React, { useContext } from 'react';
import style from './technologiesList.module.scss';
import TechnologyButtonComponent from '../technologyButton/technologyButton';
import ProjectContext from '../../context/project-context';

const TechnologiesListComponent = () => {
  const { selectedTechnology, technologies, setTechnology } =
    useContext(ProjectContext);

  const clickOnChild = (e) => {
    if (selectedTechnology !== e.uid) {
      setTechnology(e.uid);
    } else {
      setTechnology(null);
    }
  };
  return (
    <>
      <ul className={style['technologies-list']}>
        {technologies.map((singleTechnology) => (
          <li key={singleTechnology.uid}>
            <TechnologyButtonComponent
              technology={singleTechnology || null}
              onClickEvent={clickOnChild}
              selectedTechnology={selectedTechnology}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechnologiesListComponent;
