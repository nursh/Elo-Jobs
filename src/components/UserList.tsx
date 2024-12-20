import { User } from "../utils/types";
import '../assets/styles/UserList.css';

type Props = {
  users: User[];
}

export default function UserList({ users }: Props) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>            
            <th>Age</th>            
            <th>Gender</th>            
            <th>Languages</th>            
            <th>Employment Status</th>            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.languages.join(', ')}</td>
                <td>{user.employmentStatus}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}