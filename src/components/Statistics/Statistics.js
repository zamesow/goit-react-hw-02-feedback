import React from 'react';

function Statistics(props) {
  const { title, good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className="stat">
      <h2>{title}</h2>
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

export default Statistics;
