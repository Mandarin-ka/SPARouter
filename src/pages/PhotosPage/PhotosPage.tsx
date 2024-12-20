import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './PhotosPage.module.scss';

import { getPhotos } from '../../API/getUsers';
import { IPhoto } from '../../types/photo';
import Loader from '../../ui/Loader';

function PhotosPage() {
  const params = useParams();
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    getPhotos(params?.albumId || '').then(async (response) => {
      const data: IPhoto[] = await response?.json();

      setPhotos(data);
    });
  }, [params?.albumId]);

  if (photos.length === 0) return <Loader />;

  return (
    <div className={styles.wrapper}>
      {photos.map((e) => (
        <div key={e.id} className={styles.container}>
          <img src={e.thumbnailUrl} alt="NULL" />
          <p>{e.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotosPage;
