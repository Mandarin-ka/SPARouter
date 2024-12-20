import { useEffect, useState } from 'react';

import { getUsers } from '../../API/getUsers';
import Users from '../../components/Users/Users';
import { IUser } from '../../types/user';
import Loader from '../../ui/Loader';

function MainPage() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then(async (response) => {
      const data: IUser[] = await response?.json();

      setUsers(data);
    });
  }, [users.length]);

  return users.length > 0 ? <Users users={users} /> : <Loader />;
}

export default MainPage;
