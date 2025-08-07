import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

export default function ProfileModify() {
  const { profiles, setProfiles } = useOutletContext();

  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find(p => p.id === parseInt(id));

  const [data, setData] = useState({
    Name: profile.name,
    Team: profile.team,
    Job: profile.job,
    Phone: profile.tel,
    Email: profile.email,
    Image: profile.imgUrl.includes('default') ? 'default' : 'reverse'
  });

  const nameRef = useRef(null);
  const teamRef = useRef(null);
  const jobRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const change = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const Submit = (e) => {
    e.preventDefault();

    if (!data.Name) {
      alert('이름이 입력되지 않았습니다!');
      nameRef.current.focus();
      return;
    }
    if(!data.Team) {
      alert('팀이 입력되지 않았습니다!');
      teamRef.current.focus();
      return;
    }
    if(!data.Job) {
      alert('직책이 입력되지 않았습니다!');
      jobRef.current.focus();
      return;
    }
    if(!data.Phone) {
      alert('전화번호가 입력되지 않았습니다!');
      phoneRef.current.focus();
      return;
    }
    if(!data.Email) {
      alert('이메일이 입력되지 않았습니다!');
      emailRef.current.focus();
      return;
    }
    
    const updateProfile = {
      id: parseInt(id),
      name: data.Name,
      team: data.Team,
      job: data.Job,
      tel: data.Phone,
      email: data.Email,
      imgUrl: data.Image === 'default' ? '/src/assets/PARADOX_default.png' : '/src/assets/PARADOX_reverse.png'
    };

    setProfiles(prev => prev.map(p => p.id === parseInt(id) ? updateProfile : p));

    navigate('/profiles/list');
  };


  return (
    <div className='container'>
      <h1>프로필 카드 만들기</h1>
      <form onSubmit={Submit} className='inputBox'>
        <h2>정보를 입력해주세요.</h2>
        <p><b><span>Name </span></b><input type="text" ref={nameRef} name='Name' value={data.Name} onChange={change} placeholder='ex) 이주환' /></p>
        <p><b><span>Team </span></b><input type="text" ref={teamRef} name='Team' value={data.Team} onChange={change} placeholder='ex) PARADOX' /></p>
        <p><b><span>Job </span></b><input type="text" ref={jobRef} name='Job' value={data.Job} onChange={change} placeholder='ex) Frontend Developer' /></p>
        <p><b><span>Phone </span></b><input type="text" ref={phoneRef} name='Phone' value={data.Phone} onChange={change} placeholder='ex) 010-8888-4444' /></p>
        <p><b><span>Email </span></b><input type="text" ref={emailRef} name='Email' value={data.Email} onChange={change} placeholder='ex) paradox@gmail.com' /></p>
        <p><b><span>Image </span></b>
          <input type="radio" name='Image' value="default" checked={data.Image === 'default'} onChange={change} />Default
          <b></b>
          <input type="radio" name='Image' value="reverse" checked={data.Image === 'reverse'} onChange={change} />Reverse
        </p>
        <button type='submit'>수정완료</button>
      </form>
    </div>
  )
}