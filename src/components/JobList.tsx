import { NavLink } from "react-router";
import { getLanguages } from "../utils/dataFormat";
import { JobReal } from "../utils/types";

type Props = {
  jobs: JobReal[] | { detail: string};
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
            <th>Title</th>
            <th>Company</th>
            <th>Required Experience</th>
            <th>Languages</th>
            <th>Gender</th>
            <th>Citizenship</th>
            <th>Max Age</th>
            <th>Education</th>
            <th>Disability</th>
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
                {/*<td>*/}
                {/*  {job.location === "" || job.location === "nan"*/}
                {/*    ? ""*/}
                {/*    : job.location}*/}
                {/*</td>*/}
                <td>{job.required_gender}</td>
                <td>{job.required_citizenship}</td>
                <td>{job.required_age === 0 ? "": job.required_age}</td>
                <td>{job.required_education}</td>
                <td>{job.required_disability}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
