//import PropTypes from 'prop-types';
//import { Paragraf, Span } from './User.styled';
//import { countGoodFeedback } from './App'

export const Feedback = ({
  options: { good, neutral, bad },
  countFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  console.log(countTotalFeedback());
  return (
    <>
      <h2>Please leave feedback</h2>
      <button name="good" type="button" onClick={countFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={countFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={countFeedback}>
        Bad
      </button>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
      </ul>
    </>
  );
};

// User.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         email: PropTypes.string.isRequired,
//     }).isRequired
// }
