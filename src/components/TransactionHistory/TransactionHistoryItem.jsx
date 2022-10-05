import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <>
      <tr className={ s.deskRow}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
