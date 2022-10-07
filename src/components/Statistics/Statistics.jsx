export const Statistics = ({
  options: { good, neutral, bad }, 
  total,
  positivePercentage,
}) => {
  return (
    <>
     <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage()}%</li>
      </ul>
    </>
  );
};
