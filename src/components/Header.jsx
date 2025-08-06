import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Profile Card List</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profiles/list'>Card List</Link>
        <Link to='/profiles/new'>Make Card</Link>
      </nav>
    </header>
  );
};