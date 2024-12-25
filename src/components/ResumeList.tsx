import {getLanguages} from "../utils/dataFormat";
import { UserReal } from "../utils/types";
import {NavLink} from "react-router";
// import '../assets/styles/UserList.css';

type Props = {
  users: UserReal[];
}

export default function ResumeList({ users }: Props) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
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
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{getLanguages(user.languages)}</td>
                <td>{user.level_of_education}</td>
                <td>{user.citizenship}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}