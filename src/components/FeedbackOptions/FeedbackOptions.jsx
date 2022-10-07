import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  const opt = Object.keys(options);

  return (
    <>
      {opt.map(key => {
        return (
          <button
            className={s.btn}
            name={key}
            key={key}
            type="button"
            onClick={onLeaveFeedback}
          >
            {key[0].toUpperCase() + key.slice(1)}
          </button>
        );
      })}
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
