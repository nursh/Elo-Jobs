import { useParams } from "react-router"
import { jobs } from "../utils/data";
import { Header } from "../components/Header";
import '../assets/styles/JobProfile.css'

type Params = {
  jobId: string;
}

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const job = jobs.find(({ id }) => id === Number(jobId))!

  return (
    <>
      <Header name="Job Profile" />
      <div className="profile-heading">
        <h4>{job.company}</h4>
        <h2>{job.title}</h2>
        <p>{job.location}</p>
      </div>


      <div className="profile-details">
        <div className="profile-detail">
          <h5>Required Gender:</h5>
          <p>{job.requiredGender}</p>
        </div>
        <div className="profile-detail">
          <h5>Required Age</h5>
          <p>{job.requiredAge}</p>
        </div>
        <div className="profile-detail">
          <h5>Employment Status:</h5>
          <p>{job.requiredEmploymentStatus}</p>
        </div>
        <div className="profile-detail">
          <h5>Languages:</h5>
          <p>{job.requiredLanguages.join(', ')}</p>
        </div>
        <div className="profile-detail">
          <h5>Citizenship:</h5>
          <p>{job.requiredCitizenship}</p>
        </div>
      </div>
    </>
  )
}