import { useNavigate } from "react-router-dom";

export default function ProfileList({ profiles, setProfiles }) {
  const navigate = useNavigate();
  const modifyBtn = (id) => {
    navigate(`/modify/${id}`);
  }

  const deleteBtn = (id) => {
    setProfiles(prev => prev.filter(profile => profile.id !== id));
  }

  return (
    <div>
      {profiles.map(profile => (
        <div key={profile.id}>
          <img src={profile.imgUrl} alt='Profile' />
          <h3>{profile.name}</h3>
          <p><strong>Team. </strong><strong>{profile.team}</strong></p>
          <p>{profile.job}</p>
          <p><strong>tel. </strong><strong>{profile.tel}</strong></p>
          <p><strong>email. </strong><strong>{profile.email}</strong></p>
          <div className='btns'>
            <button className='modifyBtn' onClick={modifyBtn(profile.id)}>수정</button>
            <button className='deleteBtn' onClick={deleteBtn(profile.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  )
}