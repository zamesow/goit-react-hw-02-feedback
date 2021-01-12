import React, { Component } from 'react';
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   total
  countTotalFeedback() {
    const total = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0,
    );

    return total;
  }
  //   percentage
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total ? Math.round((good / total) * 100) : 0;

    return percentage;
  }

  //   инкремент
  onFeedback = ({ target }) => {
    const type = target.dataset.action;

    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedback={this.onFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countPositiveFeedbackPercentage() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
