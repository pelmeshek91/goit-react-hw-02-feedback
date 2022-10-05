import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className = {s.transactionDeskHead}>
          <th className={ s.headItem }>Type</th>
          <th className={ s.headItem }>Amount</th>
          <th className={ s.headItem }>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(trans => (
          <TransactionHistoryItem {...trans} key={ trans.id} />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    }),
  ),
};
