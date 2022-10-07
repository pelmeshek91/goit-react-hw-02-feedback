//import PropTypes from 'prop-types';
//import { Paragraf, Span } from './User.styled';

import { Statistics } from "./Statistics/Statistics";
import {FeedbackOption} from "./FeedbackOptions/FeedbackOptions";
export const Feedback = ({
  options,
  countFeedback,
  total,
  countPositiveFeedbackPercentage,
}) => {
  
  return (
    <>
      <h2>Please leave feedback</h2>
      {/* <button name="good" type="button" onClick={countFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={countFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={countFeedback}>
        Bad
      </button> */}
      <FeedbackOption onLeaveFeedback={countFeedback} options={options}/>
      <Statistics total={total} options={options} positivePercentage={countPositiveFeedbackPercentage}/>
      

        </>

  );
};


