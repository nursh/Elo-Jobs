import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars, faLanguage, faLocationDot, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { JobReal, type Job } from "../utils/types"
import { NavLink } from "react-router";
import { getLanguages } from "../utils/dataFormat";

type Props = {
  job: JobReal;
}

export default function Job({ job }: Props) {

  return (
    <div className="job-card">
      <div className="job-heading">
        <div className="job-title">
          <NavLink to={`/job/${job.id}`}>
            <h3>{job.job_title}</h3>
          </NavLink>
          <p>{job.company}</p>
        </div>
        <div className="job-detail">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="job-location">{job.location}</p>
        </div>
      </div>

      <div className="job-details">
        <div className="job-detail">
          <FontAwesomeIcon icon={faVenusMars} />
          <p>{job.required_gender && 'All'}</p>
        </div>
        

        <div className="job-detail">
          <FontAwesomeIcon icon={faLanguage} />
          <p>{getLanguages(job.required_languages)}</p>
        </div>
        
        <div className="job-detail">
          <FontAwesomeIcon icon={faBriefcase} />
          <p>{job.required_age}</p>
        </div>
      </div>
    </div>
  )
}