import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';
import s from './Feedback.module.css';
export const Feedback = ({
  PositiveFeedback,
  total,
  options,
  countFeedback,
}) => {
  return (
    <div className={s.sectionWrap}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={countFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            countTotalFeedback={total}
            PositiveFeedback={PositiveFeedback}
            options={options}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
