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
    Image: profile.imgUrl.inclueds('default') ? 'default' : 'reverse'
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
    if (!data.Name) {
      alert('이름을 입력하세요');
      nameRef.current.focus();
      return;
    }
    if(!data.Team) {
      alert('팀명을 입력하세요');
      teamRef.current.focus();
      return;
    }
    if(!data.Job) {
      alert('직업을 입력하세요');
      jobRef.current.focus();
      return;
    }
    if(!data.Phone) {
      alert('전화번호를 입력하세요');
      phoneRef.current.focus();
      return;
    }
    if(!data.Email) {
      alert('이메일을 입력하세요');
      emailRef.current.focus();
      return;
    }
    
    const updateProfile = {
      id: id,
      name: data.Name,
      team: data.Team,
      job: data.Job,
      tel: data.Phone,
      email: data.Email,
      imgUrl: data.Image === 'default' ? '/assets/PARADOX_default.png' : '/assets/PARADOX_reverse.png'
    };

    setProfiles(prev => prev.map(p => p.id === id ? updateProfile : p));

    navigate('../list');
  };

  return (
    <div className='container'>
      <h1>프로필 카드 만들기</h1>
      <form onSubmit={Submit}>
        <h2>정보를 입력해주세요.</h2>
        <input type="text" ref={nameRef} name='Name' value={data.Name} onChange={change} placeholder='ex) 이주환' />
        <input type="text" ref={teamRef} name='Team' value={data.Team} onChange={change} placeholder='ex) PARADOX' />
        <input type="text" ref={jobRef} name='Job' value={data.Job} onChange={change} placeholder='ex) Frontend Developer' />
        <input type="text" ref={phoneRef} name='Phone' value={data.Phone} onChange={change} placeholder='ex) 010-8888-4444' />
        <input type="text" ref={emailRef} name='Email' value={data.Email} onChange={change} placeholder='ex) paradox@gmail.com' />
        <div>
          <input type="radio" name='Image' value="default" onChange={change}/>
          <input type="radio" name='Image' value="reverse" onChange={change}/>
        </div>
        <button type='submit'>수정완료</button>
      </form>
    </div>
  )
}
