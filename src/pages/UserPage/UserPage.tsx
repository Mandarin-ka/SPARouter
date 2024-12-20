import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getAlbums, getUser } from '../../API/getUsers';
import UserInfo from '../../components/UserInfo/UserInfo';
import { IAlbum } from '../../types/albums';
import { IUser } from '../../types/user';

function UserPage() {
  const params = useParams();

  const [user, setUser] = useState<IUser>();
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    getUser(params?.id || '').then(async (respone) => {
      const data: IUser = await respone?.json();
      setUser(data);
    });

    getAlbums(params?.id).then(async (respone) => {
      const data: IAlbum[] = await respone?.json();
      setAlbums(data);
    });
  }, [params?.id]);

  return <UserInfo user={user} albums={albums} />;
}

export default UserPage;
