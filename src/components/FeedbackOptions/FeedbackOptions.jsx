import PropTypes from 'prop-types';
export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  const opt = Object.keys(options);

  return (
    <>

      {opt.map(key => {
        // const f = key.split("") 
        // console.log(f[0].toUpperCase().push(f.slice(1)));
        // console.log(f.slice(1))  
       

        
        return (<button name={key} key={key} type="button" onClick={onLeaveFeedback}>
          {key[0].toUpperCase() + key.slice(1)}
                  
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
