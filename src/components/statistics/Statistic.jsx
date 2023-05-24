export const Statistic = ({
  options: { good, neutral, bad },
  countTotalFeedback,
  PositiveFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
      <p>Total: {countTotalFeedback} </p>
      <p>Positive feedback: {PositiveFeedback()}% </p>
    </div>
  );
};
