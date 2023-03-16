import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { wysiwygToHtmlParser } from '../../services/utils';
import style from './skillCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useOnScreen } from '../../hooks/useOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const skillCard = ({ data }) => {
  const {
    skill_image,
    skill_title,
    skill_description,
    skill_year,
    skill_url
  } = data;

  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  return (
    <div
      className={`${style['skill-card']} ${isOnScreen && style['skill-card--visible']}`}
      ref={elementRef}
    >
      <div className={style['skill-card__heading']}>
        <Image
          className={style['skill-card__image']}
          width={skill_image?.dimensions?.width || 128}
          height={skill_image?.dimensions?.height || 128}
          src={skill_image?.url}
          alt={skill_image?.alt}
        />
        <p className={style['skill-card__title']}>{skill_title[0]?.text}</p>
      </div>
      <div
        className={style['skill-card__description']}
        dangerouslySetInnerHTML={{
          __html: wysiwygToHtmlParser(skill_description),
        }}
      />
      <div className={style['skill-card__footer']}>
        <p className={style['skill-card__year']}>
          Connaissance depuis {skill_year}
        </p>
        <Link
          href={skill_url?.url || ''}
          className={style['skill-card__link']}
          target="_blank"
          rel="nofollow noopener"
          aria-label={`En apprendre d'avantage sur ${skill_title[0].text}, veuillez-noter que vous aller sortir du site`}
        >
          <FontAwesomeIcon className={style['skill-card__link-icon']} icon={faArrowUpRightFromSquare} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

skillCard.defaultProps = {
  data: {},
};

skillCard.propTypes = {
  data: PropTypes.shape({
    skill_image: PropTypes.string,
    skill_title: PropTypes.string,
    skill_description: PropTypes.string,
    skill_year: PropTypes.string,
    skill_url: PropTypes.string,
  }),
};

export default skillCard;
