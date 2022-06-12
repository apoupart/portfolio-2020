import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParallax } from 'react-scroll-parallax';
import { wysiwygToHtmlParser } from '../../services/utils';
import style from './itemsList.module.scss';

const ItemsList = ({ title, items, icon }) => {
  const parallax = useParallax({
    translateY: ['-10%', '-80%'],
    rotate: ['5deg', '1deg'],
  });

  return (
    <section className={style.knowledge}>
      <div ref={parallax.ref} className={style.knowledge__banner} />
      <div className={style.knowledge__inner}>
        <p className={style.knowledge__title}>{title}</p>
        {icon && (
          <FontAwesomeIcon
            aria-hidden="true"
            className={style['knowledge__main-icon']}
            icon={['fas', icon]}
          />
        )}

        <ul className={style.knowledge__items}>
          {items.map((item, key) => (
            <li
              key={key}
              dangerouslySetInnerHTML={{
                __html: wysiwygToHtmlParser(item.label),
              }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

ItemsList.defaultProps = {
  title: '',
  icon: '',
  items: [],
};

ItemsList.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ItemsList;
