import { PageHeading } from '../components/Header'
import Job from '../components/Job'
import { jobs } from '../utils/data'

export default function JobListings() {
  return (
    <div className='job-listings'>
      <PageHeading name="Job Listings" />
      {jobs.map((job) => <Job job={job} />)}
    </div>
  )
}