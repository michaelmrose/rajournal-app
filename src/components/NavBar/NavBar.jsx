import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/today">Today</Link>
      &nbsp; | &nbsp;
      <Link to="/history">History</Link>
      &nbsp;&nbsp;
      <Link to="/graph">Graph</Link>
      &nbsp;&nbsp;
      <Link to="/notes">Notes</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}