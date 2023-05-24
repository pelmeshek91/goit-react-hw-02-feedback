import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export const Feedback = ({
  PositiveFeedback,
  total,
  options,
  countFeedback,
}) => {
  return (
    <>
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
    </>
  );
};
