import Album from './Album/Album';

import styles from './UserInfo.module.scss';

import { IAlbum } from '../../types/albums';
import { IUser } from '../../types/user';
import Loader from '../../ui/Loader';

function UserInfo({ user, albums }: { user?: IUser; albums: IAlbum[] }) {
  if (user) {
    return (
      <div className={styles.user}>
        <ul className={styles.ul}>
          {Object.entries(user).map((e) => {
            if (e[0] === 'name')
              return (
                <li key={e[0]} className={styles.pairh}>
                  <h2>{e[0]}: </h2> <h2 className={styles.t}>{e[1]}</h2>
                </li>
              );
            else
              return (
                typeof e[1] !== 'object' &&
                e[0] !== 'id' && (
                  <li key={e[0]} className={styles.pair}>
                    <p>{e[0]}: </p> <p className={styles.t}>{e[1]}</p>
                  </li>
                )
              );
          })}
        </ul>

        <div className={styles.albums}>
          {albums.map((e) => (
            <Album album={e} />
          ))}
        </div>
      </div>
    );
  }

  return <Loader />;
}

export default UserInfo;
