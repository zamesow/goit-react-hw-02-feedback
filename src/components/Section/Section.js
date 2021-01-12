import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

function Section({ title, children }) {
  return (
    <div className="section">
      <h2 className="feedback">{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
