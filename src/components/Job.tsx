import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars, faPassport, faLanguage, faLocationDot, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { type Job } from "../utils/types"
import { NavLink } from "react-router";

type Props = {
  job: Job;
}

export default function Job({ job }: Props) {

  return (
    <div className="job-card">

      <div className="job-heading">
        <div className="job-title">
          <NavLink to={`/job/${job.id}`}>
            <h3>{job.title}</h3>
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
          <p>{job.requiredGender}</p>
        </div>


        <div className="job-detail">
          <FontAwesomeIcon icon={faPassport} />
          <p>{job.requiredCitizenship}</p>
        </div>
        

        <div className="job-detail">
          <FontAwesomeIcon icon={faLanguage} />
          <p>{job.requiredLanguages.join(', ')}</p>
        </div>
        
        <div className="job-detail">
          <FontAwesomeIcon icon={faBriefcase} />
          <p>{job.requiredEmploymentStatus}</p>
        </div>
      </div>
    </div>
  )
}