export const Statistics = ({
  options,
  countTotalFeedback,
  PositiveFeedback,
}) => {
  const keys = Object.keys(options);

  return (
    <div>
      {keys.map(key => {
        return (
          <p key={key}>
            {key.replace(key[0], key[0].toUpperCase())}: {options[key]}
          </p>
        );
      })}

      <p>Total: {countTotalFeedback} </p>
      <p>Positive feedback: {PositiveFeedback()}% </p>
    </div>
  );
};
