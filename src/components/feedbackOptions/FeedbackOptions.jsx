export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);

  return (
    <div>
      {keys.map(key => {
        return (
          <button onClick={onLeaveFeedback} key={key}>
            {key.replace(key[0], key[0].toUpperCase())}
          </button>
        );
      })}
    </div>
  );
};
