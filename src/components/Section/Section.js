import React from 'react';

function Section({ title, children }) {
  return (
    <div>
      <h2 className="feedback">{title}</h2>
      {children}
    </div>
  );
}

export default Section;
