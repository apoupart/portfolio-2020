import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import style from './cursor.module.scss';

const CursorComponent = () => {

  const [posX, setPosX] = useState('0px');
  const [posY, setPosY] = useState('0px');
  const cursorElement = useRef(null);

  useEffect(() => {
    window.document.body.onpointermove = event => {
      const {clientX, clientY} = event;
      setPosX(clientX);
      setPosY(clientY);
      cursorElement.current?.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, {duration: 3000, fill: 'forwards'});
    }
  }, []);

  useRef

  return (
    <div className={style['cursor__wrapper']}>
      <div className={style['cursor']}  ref={cursorElement} />
    </div>
  );
}

// CursorComponent.defaultProps = {
//   onClickEvent: () => {},
// };

// CursorComponent.propTypes = {
//   onClickEvent: PropTypes.func,
// };

export default CursorComponent;
