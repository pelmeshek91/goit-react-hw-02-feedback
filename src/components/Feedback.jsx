//import PropTypes from 'prop-types';
//import { Paragraf, Span } from './User.styled';

export const Feedback = ({ options: { good, neutral, bad } }) => {
   

    return (
        <>
            <h2>Please leave feedback</h2>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>

        </>
    );
}

// User.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         email: PropTypes.string.isRequired,
//     }).isRequired
// }