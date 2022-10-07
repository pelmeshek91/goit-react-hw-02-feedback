import PropTypes from 'prop-types';
export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  const opt = Object.keys(options);

  return (
    <>

      {opt.map(key => {
        const f = key.split("") 
        console.log(f[0].toUpperCase());  
        return (<button name={key} key={key} type="button" onClick={onLeaveFeedback}>
         
                  
        </button>)
      })}
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object,
  // good.propTypes.number.isRequired,
  // bad.propTypes.number.isRequired,
  // neutral.propTypes.number.isRequired,
};
