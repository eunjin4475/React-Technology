import React, { useState } from 'react';

const SayHi = () => {
  const [ text, setText ]= useState(0);
  const onClickEnter = () => setText('안녕하세요~~');
  const onClickLeave = () => setText('안녕히 가세요~~');

  const [color, setColor]=useState('black');

  return(
    <div>
      <h1>{text}</h1>
      <button onClick ={onClickEnter}>입장</button>
      <button onClick ={onClickLeave}>퇴장</button>
      <button style={{ color:'red' }} onClick={()=> setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
}

export default SayHi;