import { NavLink } from "react-router";
import { PageHeading } from "../components/Header";
import { qatarJobs } from "../utils/data";
import { getLanguages } from "../utils/dataFormat";

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
                  {getLanguages(job.required_languages)}
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
