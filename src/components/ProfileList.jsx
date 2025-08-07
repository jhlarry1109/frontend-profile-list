import ProfileCard from "./ProfileCard";
import { useOutletContext } from 'react-router-dom';

export default function ProfileList() {
  const { profiles, setProfiles } = useOutletContext();

  return (
    <div>
      <h1>프로필 카드 목록</h1>
      <ul className='cardContainer'>
        {profiles.map(profile => (
          <li key={profile.id}>
            <ProfileCard profile={profile} setProfiles={setProfiles} />
          </li>
        ))}
      </ul>
    </div>
  )
}