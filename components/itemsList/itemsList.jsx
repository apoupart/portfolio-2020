import React from 'react';
import PropTypes from 'prop-types';
import { wysiwygToHtmlParser } from '../../services/utils';
import style from './itemsList.module.scss';

const ItemsList = ({ title, items }) => (
  <section className={style.knowledge__section} id="knowledge">
    <h3>{title}</h3>
    <ul>
      {items.map((item, key) => (
        <li
          key={key}
          dangerouslySetInnerHTML={{ __html: wysiwygToHtmlParser(item.label) }}
        />
      ))}
    </ul>
  </section>
);

ItemsList.defaultProps = {
  title: '',
  items: [],
};

ItemsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ItemsList;
