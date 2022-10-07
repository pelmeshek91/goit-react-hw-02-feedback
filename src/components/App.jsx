import { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    this.setState(prevState => {
      const keys = Object.keys(prevState);
      const element = keys.filter(key => key === e.target.name);
      return {
        [e.target.name]: prevState[element] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positive = 0;
    positive = Math.round((good / (good + neutral + bad)) * 100)
      ? Math.round((good / (good + neutral + bad)) * 100)
      : 0;
    return positive;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Feedback
          options={this.state}
          countFeedback={this.countFeedback}
          total={total}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
