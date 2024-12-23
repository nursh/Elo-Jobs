import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { qatariUsers } from "../utils/data";

export default function UserProfiles() {
  return (
    <div className="container">
      <PageHeading name="User Profiles" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Education</th>
            <th>Citizenship</th>
          </tr>
        </thead>
        <tbody>
          {
            qatariUsers.map((user) => {
              return (
                <tr>
                  <td>
                    <NavLink to={`/users/${user.id}`}>
                    {user.name}
                    </NavLink>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.languages.map((lang) => lang.name).join(', ')}</td>
                  <td>{user.education.map((school) => school.degree).join(', ')}</td>
                  <td>{user.citizenship}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}