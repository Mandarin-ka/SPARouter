import { Link } from 'react-router-dom';

import styles from './Album.module.scss';

import { IAlbum } from '../../../types/albums';

function Album({ album }: { album: IAlbum }) {
  return (
    <Link to={`./album/${album.id}`} className={styles.link}>
      <div className={styles.album}>
        <h2>{album.id}</h2>
        <p>{album.title}</p>
      </div>
    </Link>
  );
}

export default Album;
