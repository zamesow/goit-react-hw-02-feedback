import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onFeedback }) {
  return (
    <div className="btnBlock">
      {options.map(option => (
        <button
          type="button"
          data-action={option}
          onClick={onFeedback}
          className="btn"
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onFeedback: PropTypes.func,
};

export default FeedbackOptions;
