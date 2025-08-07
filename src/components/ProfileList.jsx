import ProfileCard from "./ProfileCard";
import { useOutletContext } from 'react-router-dom';

export default function ProfileList() {
  const { profiles, setProfiles } = useOutletContext();

  return (
    <ul>
      {profiles.map(profile => (
        <li key={profile.id}>
          <ProfileCard profile={profile} setProfiles={setProfiles} />
        </li>
      ))}
    </ul>
  )
}