import User from './User/User';

import styles from './Users.module.scss';

import { IUser } from '../../types/user';

function Users({ users }: { users: IUser[] }) {
  return (
    <div className={styles.users}>
      {users.map((e: IUser) => (
        <User user={e} key={e.id} />
      ))}
    </div>
  );
}

export default Users;
