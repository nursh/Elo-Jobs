import { NavLink, Outlet } from "react-router";
import '../assets/styles/MainLayout.css';

export default function MainLayout() {
  return (
    <div>
      <div className="header">
        <h1>Elo Jobs</h1>
        <div className="header-links">
          <NavLink to="/jobs" className="header-link">Jobs</NavLink>
          <NavLink to="/users" className="header-link">Users</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
