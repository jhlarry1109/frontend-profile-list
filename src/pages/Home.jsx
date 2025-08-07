import { Outlet } from 'react-router-dom';
import '../styles/Home.css'


const textList = [
  "Home : 홈화면을 볼 수 있다.",
  "Card List : 카드 리스트를 볼 수 있다.",
  "Make Card : 카드를 만들 수 있다.",
];

export default function Home() {

  const list = textList.map(li => <li key={li}>{li}</li>)
  return (
    <div className='container'>
      <Outlet />
      <h1 className='title'>프로필 카드 리스트 만들기</h1>
      <ul>
        {list}
      </ul>
    </div>
  );
}
