import { Component } from 'react';

import { Feedback } from './feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
          onClickGood={this.handleClickGood}
          onClickNeutral={this.handleClickNeutral}
          onClickBad={this.handleClickBad}
        />
      </>
    );
  }
}
