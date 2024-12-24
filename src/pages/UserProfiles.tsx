import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { useFetchUserProfiles } from "../lib/useFetchUserProfiles";
import { useState } from "react";
import { UserReal } from "../utils/types";
import Pagination from "../components/Pagination";

export default function UserProfiles() {
  const { isLoading, isSuccess, isError, data } = useFetchUserProfiles();
  const [usersData, setUsersData] = useState<UserReal[]>([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isSuccess) {
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
            {usersData.map((user) => {
              return (
                <tr>
                  <td>
                    <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.languages.map((lang) => lang.name).join(", ")}</td>
                  <td>
                    {user.education.map((school) => school.degree).join(", ")}
                  </td>
                  <td>{user.citizenship}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination data={data} limit={10} setPageData={setUsersData} />
      </div>
    );
  }
}
