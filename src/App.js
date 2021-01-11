import React, { Component } from 'react';
import Statistics from './components/Statistics';
import Section from './components/Section';
class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 1,
  };

  render() {
    const { good, neutral, bad } = this.state;

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
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
                      options={ }
                      onLeaveFeedback={ }>
                  </FeedbackOptions> */}
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
