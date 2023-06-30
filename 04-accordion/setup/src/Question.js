import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [show, setShow] = useState(false)
  const toggleInfo = () => {
    setShow((prev) => !prev)
  }

  return <div className="question">
  <header>
    <h4>{title}</h4>
    <div className="btns">
      <div onClick={toggleInfo} className={show ? 'btn, hide' : 'btn' }>
        <AiOutlinePlus />
      </div>
      <div onClick={toggleInfo} className={show ? 'btn' : 'btn, hide'}>
        <AiOutlineMinus/>
      </div>
    </div>
  </header>
  <p className={show ? undefined : 'hide'}>{info}</p>
</div>
};

export default Question;
