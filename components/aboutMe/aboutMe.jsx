import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from './aboutMe.module.scss';
import { wysiwygToHtmlParser } from '../../services/utils';
import { useOnScreen } from '../../hooks/useOnScreen';

const AboutMeComponent = ({ description }) => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const lineNumberArray = Array(50).fill('');
  const lineNumber = lineNumberArray.map((data, index) => (
    <li key={`line-${index}`}>{index + 1}</li>
  ));
  const content = wysiwygToHtmlParser(description, true);
  return (
    <div className={style['about-me']} id="about-me">
      <h3 className="visually-hidden">À propos de moi</h3>
      <div className={`${style['about-me__wrapper']} ${isOnScreen && style['about-me__wrapper--visible']}`} ref={elementRef}>
        <div className={style['about-me__dots']} aria-hidden="true" />
        <div className={style['about-me__content']}>
          <ul className={style['about-me__sideline']} aria-hidden="true">
            {lineNumber}
          </ul>
          {content.map((element, key) => (
            <div
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
