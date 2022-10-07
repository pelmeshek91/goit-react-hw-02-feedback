import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  options: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={s.statisticsList}>
        <li className={s.statisticsItem}>Good: {good}</li>
        <li className={s.statisticsItem}>Neutral: {neutral}</li>
        <li className={s.statisticsItem}>Bad: {bad}</li>
        <li className={s.statisticsItem}>Total: {total}</li>
        <li className={s.statisticsItem}>
          Positive feedback: {positivePercentage()}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};
