import React, { useState } from 'react';

const KBasicAccordion = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div key={"acc-basic-"+id} className="kaccordion-item">
      <div className="kaccordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="kaccordion-content">{content}</div>}
    </div>
  );
};

export default KBasicAccordion;
