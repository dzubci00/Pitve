import React, { useRef, useEffect } from 'react';

function Popup(props) {

  return (
    <div
    
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
        display: props.show ? 'flex' : 'none',
        alignItems: 'center',
      }}
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
}

export default Popup;
