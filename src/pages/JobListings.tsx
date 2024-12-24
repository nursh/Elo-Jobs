import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { getLanguages } from "../utils/dataFormat";
import { useQuery } from "@tanstack/react-query";
import { JobReal } from "../utils/types";

export default function JobListings() {
  const { isLoading, isSuccess, isError, data } = useQuery<JobReal[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/jobs`);
      return await response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
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
            {data.map((job) => {
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
      </div>
    );
  }
}
