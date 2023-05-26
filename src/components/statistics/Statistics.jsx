import PropTypes from 'prop-types';

export const Statistics = ({
  options,
  countTotalFeedback,
  PositiveFeedback,
}) => {
  return (
    <div>
      {Object.keys(options).map(key => {
        return (
          <p key={key}>
            {key.replace(key[0], key[0].toUpperCase())}: {options[key]}
          </p>
        );
      })}

      <p>Total: {countTotalFeedback} </p>
      <p>Positive feedback: {PositiveFeedback}% </p>
    </div>
  );
};

Statistics.propTypes = {
  PositiveFeedback: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
};
