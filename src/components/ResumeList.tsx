import { getLanguages } from "../utils/dataFormat";
import { UserReal } from "../utils/types";
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
            <th>Name</th>
            <th>Email</th>            
            <th>Age</th>            
            <th>Gender</th>            
            <th>Languages</th>            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{getLanguages(user.languages)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}