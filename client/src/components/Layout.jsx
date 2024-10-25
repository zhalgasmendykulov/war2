import { Outlet } from 'react-router-dom';
import Loader from './hoc/Loader';
import Header from './ui/Header';

export default function Layout({user, logoutHandler}) {
  return (
    <Loader>
      <Header user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </Loader>
  );
}
