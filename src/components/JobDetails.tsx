import { getLanguages, getLocation, getSkills } from "../utils/dataFormat";
import { JobReal } from "../utils/types";
import ProfileDetail from "./ProfileDetail";

type Props = {
  job: JobReal;
};

export default function JobDetails({ job }: Props) {
  return (
    <>
      <div className="profile-heading">
        <h4>{job.company}</h4>
        <h2>{job.job_title}</h2>
        <p>{getLocation(job.location)}</p>
      </div>

      <div className="profile-details">
        <ProfileDetail title="Description" value={job.description} />
        <ProfileDetail title="Gender" value={job.required_gender || "All"} />
        <ProfileDetail title="Age" value={job.required_age || "None"} />
        <ProfileDetail title="Education" value={job.required_education.map((edu) => edu).join(', ')} />
        <ProfileDetail
          title="Experience(years)"
          value={job.required_experience}
        />
        <ProfileDetail
          title="Languages"
          value={getLanguages(job.required_languages)}
        />
        <ProfileDetail
          title="Optional Languages"
          value={getLanguages(job.optional_languages)}
        />
        <ProfileDetail title="skills" value={getSkills(job.required_skills)} />
        <ProfileDetail title="preferred skills" value={getSkills(job.preferred_skills)} />
        <ProfileDetail title="Disability" value='None' />
        <ProfileDetail title="Citizenship" value={job.required_citizenship} />
      </div>
    </>
  );
}
