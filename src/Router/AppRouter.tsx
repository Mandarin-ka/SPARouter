import { Route, Routes } from 'react-router';

import MainPage from '../pages/MainPage/MainPage';
import NotFound from '../pages/NotFound/NotFound';
import PhotosPage from '../pages/PhotosPage/PhotosPage';
import UserPage from '../pages/UserPage/UserPage';

function AppRouter() {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/user/:id'} element={<UserPage />} />
      <Route path={'/user/:id/album/:albumId'} element={<PhotosPage />} />

      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
