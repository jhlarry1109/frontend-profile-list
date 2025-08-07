import { Outlet } from 'react-router-dom';
import '../styles/ProfileLayout.css';

function ProfileLayout({ profiles, setProfiles }) {
  return (
    <div className='layout'>
      <Outlet context={{ profiles, setProfiles }} />
    </div>
  )
}

export default ProfileLayout