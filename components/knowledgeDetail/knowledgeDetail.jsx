import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './knowledgeDetail.module.scss';

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
        knowledge.knowledgeList.map((data, key) => (
          <li
            className={style['knowledge__list--item']}
            key={`${knowledge.slug}__${key}`}
          >
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
    knowledgeList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default KnowledgeDetailComponent;
