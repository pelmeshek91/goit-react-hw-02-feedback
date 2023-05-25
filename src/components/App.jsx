import { Component } from 'react';

import { Feedback } from './feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    this.setState(prevState => {
      const valueFromBtn = e.target.textContent.toLowerCase();
      const res = Object.keys(prevState).filter(key => key === valueFromBtn);
      return { [valueFromBtn]: prevState[res] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let pers = Math.round((good / this.countTotalFeedback()) * 100);
    let res = pers ? pers : 0;
    return res;
  };

  render() {
    return (
      <>
        <Feedback
          options={this.state}
          total={this.countTotalFeedback()}
          PositiveFeedback={this.countPositiveFeedbackPercentage}
          countFeedback={this.countFeedback}
        />
      </>
    );
  }
}
