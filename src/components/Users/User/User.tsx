import { Link } from 'react-router-dom';

import styles from './User.module.scss';

import { IUser } from '../../../types/user';

function User({ user }: { user: IUser }) {
  return (
    <Link to={`user/${user.id}`} className={styles.link}>
      <div className={styles.user}>{user.username}</div>
    </Link>
  );
}

export default User;
