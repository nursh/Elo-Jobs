import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { getLanguages } from "../utils/dataFormat";
import { useFetchJobs } from "../lib/useFetchJobs";
import Pagination from "../components/Pagination";
import { useState } from "react";
import { JobReal } from "../utils/types";

export default function JobListings() {
  const { isLoading, isSuccess, isError, data } = useFetchJobs();
  const [dataShown, setDataShown] = useState<JobReal[]>([]);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">Something went wrong</div>;
  }

  if (isSuccess) {
    return (
      <div className="container">
        <PageHeading name="Job Listings" />
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Required Experience</th>
              <th>Languages</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {dataShown.map((job) => {
              return (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>
                    <NavLink to={`/jobs/${job.id}`}>{job.job_title}</NavLink>
                  </td>
                  <td>{job.company}</td>
                  <td>{job.required_experience}</td>
                  <td>{getLanguages(job.required_languages)}</td>
                  <td>{job.location === '' || job.location === 'nan' ? '' : job.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          data={data}
          limit={10}
          setPageData={setDataShown}
        />
      </div>
    );
  }
}
