import { Link } from 'react-router-dom';

export default function ProfileCard({ profile, setProfiles }) {


  const deleteBtn = () => {
    setProfiles(prev => prev.filter(p => p.id !== profile.id));
  }

  return (
    <div>
      <img src={profile.imgUrl} alt='Profile' />
      <h3>{profile.name}</h3>
      <p><strong>Team. </strong><strong>{profile.team}</strong></p>
      <p>{profile.job}</p>
      <p><strong>tel. </strong><strong>{profile.tel}</strong></p>
      <p><strong>email. </strong><strong>{profile.email}</strong></p>
      <div className='btns'>
        <Link to={`/profiles/modify/${profile.id}`}>
          <button className='modifyBtn'>수정</button>
        </Link>
        <button className='deleteBtn' onClick={deleteBtn}>삭제</button>
      </div>
    </div>
  )
}

