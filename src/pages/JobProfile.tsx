import { useParams } from "react-router"
import { Header } from "../components/Header";
import JobDetails from "../components/JobDetails";
import '../assets/styles/JobProfile.css'
import { jobs, users } from "../utils/data";
import UserList from "../components/UserList";

type Params = {
  jobId: string;
}

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const job = jobs.find(({ id }) => id === Number(jobId))!
  const matchedUsers = users.filter(({ employmentStatus }) => job.requiredEmploymentStatus === employmentStatus)

  return (
    <>
      <Header name="Job Profile" />
      <JobDetails job={job} />

      <h2>All Matching User Profiles</h2>
      <UserList users={matchedUsers} />
    </>
  )
}