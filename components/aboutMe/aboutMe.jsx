import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import style from './aboutMe.module.scss';

const AboutMeComponent = ({ catchPhrase }) => {
  const lineNumberArray = Array(50).fill('');
  const lineNumber = lineNumberArray.map((data, index) => (
    <li key={`line-${index}`}>{index + 1}</li>
  ));
  return (
    <div className={style['about-me']} id="about-me">
      <h3 className="visually-hidden">À propos de moi</h3>
      <div className={style['about-me__wrapper']}>
        <div className={style['about-me__dots']} aria-hidden="true" />
        <ul className={style['about-me__sideline']} aria-hidden="true">
          {lineNumber}
        </ul>

        <ReactMarkdown className={style['about-me__content']}>
          {catchPhrase}
        </ReactMarkdown>
      </div>
    </div>
  );
};

AboutMeComponent.propTypes = {
  catchPhrase: PropTypes.string.isRequired,
};

export default AboutMeComponent;
