import React from 'react';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className="stat">
      <ul className="statList">
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Pozitive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
