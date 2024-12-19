import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars, faPassport, faLanguage, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { type Job } from "../utils/types"

type Props = {
  job: Job;
}

export default function Job({ job }: Props) {

  return (
    <div className="job-card">

      <div className="job-heading">
        <div className="job-title">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <p className="job-location">{job.location}</p>
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
          <FontAwesomeIcon icon={faUserGraduate} />
          <p>{job.requiredEmploymentStatus}</p>
        </div>
      </div>
    </div>
  )
}