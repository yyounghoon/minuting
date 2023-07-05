import { Navigate } from 'react-router-dom';
import { getLocalStorage } from '../utils/storage';
import DefaultLayout from './layouts/DefaultLayout';
import ModalManager from './ModalManager';

function Root() {
  const isLogin = getLocalStorage('accessToken');

  if (!isLogin) return <Navigate to={'/login'} />;

  return (
    <>
      <DefaultLayout />
      <ModalManager />
    </>
  );
}

export default Root;
