import { useParams } from "react-router"
import { PageHeading } from "../components/Header";
import JobDetails from "../components/JobDetails";
import '../assets/styles/JobProfile.css'
import { qatarJobs, users } from "../utils/data";
import UserList from "../components/UserList";

type Params = {
  jobId: string;
}

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const job = qatarJobs.find(({ id }) => id === Number(jobId))!
  const matchedUsers = users.filter(({ age }) => job.required_age <= age)

  return (
    <div className="profile-container">
      <PageHeading name="Job Profile" />
      <div className="side-details">
        <JobDetails job={job} />
      </div>

      <div>
        <h2>All Matching User Profiles</h2>
        <UserList users={matchedUsers} />
      </div>
    </div>
  )
}