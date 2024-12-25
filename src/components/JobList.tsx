import { NavLink } from "react-router";
import { getLanguages } from "../utils/dataFormat";
import { JobReal } from "../utils/types";

type Props = {
  jobs: JobReal[];
};

export default function JobList({ jobs }: Props) {

  if ('detail' in jobs) {
    return <div>{jobs.detail}</div>
  }

  return (
    <>
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
          {jobs.map((job) => {
            return (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>
                  <NavLink to={`/jobs/${job.id}`}>{job.job_title}</NavLink>
                </td>
                <td>{job.company}</td>
                <td>{job.required_experience}</td>
                <td>{getLanguages(job.required_languages)}</td>
                <td>
                  {job.location === "" || job.location === "nan"
                    ? ""
                    : job.location}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
