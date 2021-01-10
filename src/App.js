import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 1,
  };

  render() {
    const { good, neutral, bad } = this.state; //

    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0,
    );

    console.log(countTotalFeedback);

    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback,
    );

    console.log(countPositiveFeedbackPercentage);

    return (
      <>
        <div className="feedback">
          <h1>Please leave feedback</h1>

          <div className="btnBlock">
            <button type="button" className="btn">
              Good
            </button>
            <button type="button" className="btn">
              Neutral
            </button>
            <button type="button" className="btn">
              Bad
            </button>
          </div>

          <h2>Statistics</h2>

          <div className="stat">
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {countTotalFeedback}</p>
            <p>Pozitive feedback: {countPositiveFeedbackPercentage}%</p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
