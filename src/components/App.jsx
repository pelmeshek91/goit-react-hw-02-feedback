import { Component } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from './statistics/Statistics';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  lang: 'en',
};

const optionsBtn = [
  { name: 'good', title: { en: 'Good', ua: 'Добре' } },
  { name: 'neutral', title: { en: 'Neutral', ua: 'Задовільно' } },
  { name: 'bad', title: { en: 'Bad', ua: 'Погано' } },
];

export class App extends Component {
  state = initialState;

  countFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
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
    const total = this.countTotalFeedback();
    const pers = this.countPositiveFeedbackPercentage();
    const { lang, ...options } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.countFeedback}
            options={optionsBtn}
            lang={lang}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              countTotalFeedback={total}
              PositiveFeedback={pers}
              options={options}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
