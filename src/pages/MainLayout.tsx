import { NavLink, Outlet } from "react-router";
import '../assets/styles/MainLayout.css';

export default function MainLayout() {
  return (
    <div>
      <div className="nav">
        <h1>Elo Jobs</h1>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Job Listings</NavLink>
          <NavLink to="/users" className="nav-link">Users Profiles</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
