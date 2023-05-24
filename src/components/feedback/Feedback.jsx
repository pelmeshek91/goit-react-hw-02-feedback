import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Statistic } from '../statistics/Statistic';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export const Feedback = ({
  PositiveFeedback,
  total,
  options,
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClickGood={onClickGood}
          onClickNeutral={onClickNeutral}
          onClickBad={onClickBad}
          options={options}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistic
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
