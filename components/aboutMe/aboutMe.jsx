import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import style from './aboutMe.module.scss';
import { wysiwygToHtmlParser } from '../../services/utils';

const AboutMeComponent = ({ description }) => {
  const lineNumberArray = Array(50).fill('');
  const lineNumber = lineNumberArray.map((data, index) => (
    <li key={`line-${index}`}>{index + 1}</li>
  ));
  const content = wysiwygToHtmlParser(description);
  console.log('content', content);
  return (
    <div className={style['about-me']} id="about-me">
      <h3 className="visually-hidden">À propos de moi</h3>
      <div className={style['about-me__wrapper']}>
        <div className={style['about-me__dots']} aria-hidden="true" />

        <div className={style['about-me__content']}>
          <ul className={style['about-me__sideline']} aria-hidden="true">
            {lineNumber}
          </ul>
          {content.map((element, key) => (
            <p
              key={`content-${key + 1}`}
              dangerouslySetInnerHTML={{ __html: element }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

AboutMeComponent.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      span: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default AboutMeComponent;
