import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div className='header'>
      <header>
        <h1>Profile Card List</h1>
      </header>
      <nav>
        <Link to='/' className='navtxt'>Home</Link>
        <Link to='/profiles/list' className='navtxt'>Card List</Link>
        <Link to='/profiles/new' className='navtxt'>Make Card</Link>
      </nav>
    </div>
  );
};