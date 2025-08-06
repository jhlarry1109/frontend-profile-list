import { useState, useRef } from 'react';

export default function ProfileForm({ profiles, setProfiles }) {
  const [data, setData] = useState({
    Name: '',
    Team: '',
    Job: '',
    Phone: '',
    Email: '',
    Image: 'default'
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
    
    const maxId = Math.max(...profiles.map(p => p.id))
    const newProfile = {
      id: maxId+1,
      name: data.Name,
      team: data.Team,
      job: data.Job,
      tel: data.Tel,
      email: data.Email,
      imgUrl: data.Image === 'default' ? '/assets/PARADOX_default.png' : '/assets/PARADOX_reverse.png'
    };

    setProfiles([...profiles, newProfile]);

    setData({
      Name: '',
      Team: '',
      Job: '',
      Phone: '',
      Email: '',
      Image: 'default'
    });
  };

  return (
    <div className='container'>
      <h1>프로필 카드 만들기</h1>
      <form onSubmit={Submit}>
        <input type="text" ref={nameRef} name='Name' value={data.Name} onChange={change} placeholder='ex) 이주환' />
        <input type="text" ref={teamRef} name='Team' value={data.Team} onChange={change} placeholder='ex) PARADOX' />
        <input type="text" ref={jobRef} name='Job' value={data.Job} onChange={change} placeholder='ex) Frontend Developer' />
        <input type="text" ref={phoneRef} name='Phone' value={data.Phone} onChange={change} placeholder='ex) 010-8888-4444' />
        <input type="text" ref={emailRef} name='Email' value={data.Email} onChange={change} placeholder='ex) paradox@gmail.com' />
        <div>
          <input type="radio" name='Image' value="default" onChange={change}/>
          <input type="radio" name='Image' value="reverse" onChange={change}/>
        </div>
      </form>
    </div>
  )
}
