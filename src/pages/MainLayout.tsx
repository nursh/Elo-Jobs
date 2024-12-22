import { NavLink, Outlet } from "react-router";
import "../assets/styles/MainLayout.css";

export default function MainLayout() {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <h1>Elo Jobs</h1>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              Job Listings
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="nav-link">
              Users Profiles
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
