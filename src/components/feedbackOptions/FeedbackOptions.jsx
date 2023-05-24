import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);

  return (
    <div className={s.btnWrap}>
      {keys.map(key => {
        return (
          <button onClick={onLeaveFeedback} key={key} className={s.btn}>
            {key.replace(key[0], key[0].toUpperCase())}
          </button>
        );
      })}
    </div>
  );
};
