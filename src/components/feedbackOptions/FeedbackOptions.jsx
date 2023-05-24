export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <div>
      <button onClick={() => onClickGood()}>Good</button>
      <button onClick={() => onClickNeutral()}>Neutral</button>
      <button onClick={() => onClickBad()}>Bad</button>
    </div>
  );
};
