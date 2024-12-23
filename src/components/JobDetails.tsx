import { getLanguages } from "../utils/dataFormat";
import { JobReal } from "../utils/types";

type Props = {
  job: JobReal;
}

export default function JobDetails({ job }: Props) {
  
    return (
      <>
        <div className="profile-heading">
          <h4>{job.company}</h4>
          <h2>{job.job_title}</h2>
          <p>{job.location}</p>
        </div>


        <div className="profile-details">
          <div className="profile-detail">
            <h5>Description:</h5>
            <p>{job.description}</p>
          </div>
          <div className="profile-detail">
            <h5>Required Gender:</h5>
            <p>{job.required_gender || 'All'}</p>
          </div>
          <div className="profile-detail">
            <h5>Required Age:</h5>
            <p>{job.required_age}</p>
          </div>
          <div className="profile-detail">
            <h5>Experience(years):</h5>
            <p>{job.required_experience}</p>
          </div>
          <div className="profile-detail">
            <h5>Languages:</h5>
            <p>{getLanguages(job.required_languages)}</p>
          </div>
          <div className="profile-detail">
            <h5>Citizenship:</h5>
            <p>{job.required_citizenship}</p>
          </div>
        </div>
      </>
    )
}