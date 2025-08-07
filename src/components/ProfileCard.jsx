import { Link } from 'react-router-dom';

export default function ProfileCard({ profile, setProfiles }) {


  const deleteBtn = () => {
    setProfiles(prev => prev.filter(p => p.id !== profile.id));
  }

  return (
    <div className='card'>
      <div className='imageName'>
        <img src={profile.imgUrl} alt='Profile' />
        <h3>{profile.name}</h3>
      </div>
      <div className='introBtnBox'>
        <div className='introContainer'>
          <p><strong>Team. </strong><strong>{profile.team}</strong></p>
          <strong>{profile.job}</strong>
          <p><strong>tel. </strong><span>{profile.tel}</span></p>
          <p><strong>email. </strong><span>{profile.email}</span></p>
        </div>
        <div className='btns'>
          <Link to={`/profiles/modify/${profile.id}`}>
            <button className='modifyBtn'>수정</button>
          </Link>
          <button className='deleteBtn' onClick={deleteBtn}>삭제</button>
        </div>
      </div>
    </div>
  )
}

