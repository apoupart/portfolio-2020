import React, { useEffect, useRef, useState } from 'react';
import style from './cursor.module.scss';

const CursorComponent = () => {
  const cursorElement = useRef(null);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    window.document.body.onpointermove = event => {
      const {clientX, clientY} = event;
      cursorElement.current?.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, {duration: 1800, fill: 'forwards'});
      setPressure(event.pressure * 100 || 0);
    }
  }, []);

  useRef

  return (
    <div className={style['cursor__wrapper']}>
      <div className={`${style['cursor']} ${style[`cursor--pressure-${pressure}`]}`}  ref={cursorElement} />
    </div>
  );
}

export default CursorComponent;
