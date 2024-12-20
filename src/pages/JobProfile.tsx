import { useParams } from "react-router"
import { Header } from "../components/Header";
import JobDetails from "../components/JobDetails";
import '../assets/styles/JobProfile.css'
import { jobs } from "../utils/data";

type Params = {
  jobId: string;
}

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const job = jobs.find(({ id }) => id === Number(jobId))!

  return (
    <>
      <Header name="Job Profile" />
      <JobDetails job={job} />
    </>
  )
}