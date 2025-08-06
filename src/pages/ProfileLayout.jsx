import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function ProfileLayout({ profiles, setProfiles }) {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default ProfileLayout