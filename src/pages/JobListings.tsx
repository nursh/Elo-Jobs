import { Header } from '../components/Header'
import Job from '../components/Job'
import { jobs } from '../utils/data'

export default function JobListings() {
  return (
    <>
      <Header name="Job Listings" />
      {jobs.map((job) => <Job job={job} />)}
    </>
  )
}