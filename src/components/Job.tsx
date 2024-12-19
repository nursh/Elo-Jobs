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

      
    </div>
  )
}