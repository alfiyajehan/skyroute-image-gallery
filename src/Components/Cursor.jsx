import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    const clickEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('click');
        setTimeout(() => cursorRef.current.classList.remove('click'), 150);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('click', clickEffect);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', clickEffect);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor">
    <div className="cursor-dot"></div>
  </div>;
};

export default Cursor;
