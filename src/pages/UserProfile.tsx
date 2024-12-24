import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import { jobs, qatariUsers, users } from "../utils/data";
import UserDetails from "../components/UserDetails";

type Params = {
  userId: string;
}

export function UserProfile() {
  const { userId } = useParams<Params>();
  const user = qatariUsers.find(({ id }) => id === Number(userId))!;
  const matchedJobs = jobs.filter(({ requiredCitizenship }) => requiredCitizenship === user.citizenship)

  return (
    <div className="profile-container">
      <PageHeading name="User Profile" />
      <div className="side-details">
        <UserDetails user={user} />
      </div>

      <div>
        <h2>Matching Jobs</h2>
        {/* <JobList jobs={matchedJobs} /> */}
      </div>
    </div>
  )
}