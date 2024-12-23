import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { qatarJobs } from "../utils/data";

export default function JobListings() {
  return (
    <div className="container">
      <PageHeading name="Job Listings" />
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Required Age</th>
            <th>Required Experience</th>
            <th>Languages</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {qatarJobs.map((job) => {
            return (
              <tr>
                <td>
                  <NavLink to={`/jobs/${job.id}`}>{job.job_title}</NavLink>
                </td>
                <td>{job.company}</td>
                <td>{job.required_age}</td>
                <td>{job.required_experience}</td>
                <td>
                  {job.required_languages && job.required_languages.length > 0
                    ? job.required_languages.join(", ")
                    : "None"}
                </td>
                <td>{job.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
