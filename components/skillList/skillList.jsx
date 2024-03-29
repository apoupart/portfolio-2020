import React from 'react';
import PropTypes, { string } from 'prop-types';
import { wysiwygToHtmlParser } from '../../services/utils';
import style from './skillList.module.scss';
import SkillCard from '../skillCard/skillCard';

const skillList = ({ data }) => {
  const { title } = data.primary;
  const { items } = data;
  
  return (
    <section className={style.skill} id="skill">
      <div className={style.skill__inner}>
        <p className={style.skill__title}>{title[0]?.text}</p>
        <ul className={style.skill__list}>
          {items.map((item, key) => (
            <SkillCard data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

skillList.defaultProps = {
  data: {
    primary: {
      title: '',
    },
    items: [],
  },
};

skillList.propTypes = {
  data: PropTypes.shape({
    primary: PropTypes.shape({
      title: string,
    }),
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        skill_image: PropTypes.string,
        skill_title: PropTypes.string,
        skill_description: PropTypes.string,
        skill_year: PropTypes.number,
        skill_url: PropTypes.string,
      })
    ),
  }),
};

export default skillList;
