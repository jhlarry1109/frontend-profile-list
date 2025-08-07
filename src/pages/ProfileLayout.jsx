import { Outlet } from 'react-router-dom';


function ProfileLayout({ profiles, setProfiles }) {
  return (
    <div className='layout'>
      <Outlet context={{ profiles, setProfiles }} />
    </div>
  )
}

export default ProfileLayout