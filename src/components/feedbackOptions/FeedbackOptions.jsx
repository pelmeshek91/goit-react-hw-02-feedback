import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={s.btnWrap}>
      {Object.keys(options).map(key => {
        return (
          <button onClick={onLeaveFeedback} key={key} className={s.btn}>
            {key.replace(key[0], key[0].toUpperCase())}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
