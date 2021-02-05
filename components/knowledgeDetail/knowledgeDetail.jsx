import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import {
  faAngular,
  faGithubAlt,
  faJava,
  faLaravel,
  faMicrosoft,
  faNodeJs,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faCode,
  faDumbbell,
  faLaptopCode,
  faLowVision,
  faStream,
} from '@fortawesome/free-solid-svg-icons';

import style from './knowledgeDetail.module.scss';

/**
 * Add all the possible technology as font here.
 */
fontawesome.library.add(
  faLaptopCode,
  faGithubAlt,
  faStream,
  faMicrosoft,
  faNodeJs,
  faLaravel,
  faJava,
  faAngular,
  faReact,
  faVuejs,
  faCode,
  faLowVision,
  faCheckCircle,
  faDumbbell
);

const KnowledgeDetailComponent = ({ knowledge }) => (
  <div className={style['knowledge__wrapper']}>
    <div className={style['knowledge__heading']}>
      <h3 className={style['knowledge__title']}>{knowledge.title}</h3>
      <FontAwesomeIcon
        aria-hidden="true"
        className={style['knowledge__main-icon']}
        icon={['fas', knowledge.icon]}
      />
    </div>
    <ul className={style['knowledge__list']}>
      {knowledge &&
        knowledge.knowledgeList.map((data) => (
          <li className={style['knowledge__list--item']} key={data.id}>
            {data.name}
          </li>
        ))}
    </ul>
  </div>
);

KnowledgeDetailComponent.propTypes = {
  knowledge: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    knowledgeList: PropTypes.shape([
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
      }),
    ]),
  }).isRequired,
};

export default KnowledgeDetailComponent;
