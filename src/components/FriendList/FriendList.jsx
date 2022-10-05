// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={s.friends}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);
