import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import JobDetails from "../components/JobDetails";
import "../assets/styles/JobProfile.css";
import ResumeList from "../components/ResumeList";
import { useFetchJob } from "../lib/useFetchJob";
import { useResumeForJob } from "../lib/useResumeForJob";
import JobChat from "./JobChat";
import { ChangeEvent, useState } from "react";

type Params = {
  jobId: string;
};

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchJob(jobId!);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(5);
  const {
    isLoading: isResumesLoading,
    isSuccess: isResumesSuccess,
    isError: isResumeError,
    data: resumeData,
  } = useResumeForJob(jobId!, count, filtered);

  const handleFilterSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    const val = evt.currentTarget.value;
    setFiltered(Boolean(val));
  }

  const handleCountSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(evt.currentTarget.value));
  }

  return (
    <div className="profile-container">
      <PageHeading name="Job Profile" />
      <div className="side-details">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong...</div>
        ) : isSuccess ? (
          <JobDetails job={data[0]} />
        ) : null}
      </div>

      <div className="profile-table">
        <h2>Showing {filtered ? "Filtered" : "Unfiltered"} Matching Resumes</h2>
        <select defaultValue={0} onChange={(handleFilterSelect)}>
          <option value={0}>Unfiltered</option>
          <option value={1}>Filtered</option>
        </select>
        <select defaultValue={5} onChange={(handleCountSelect)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        { isResumesLoading ? (
          <div>Loading...</div>
        ) : isResumeError ? (
          <div>Something went wrong...</div>
        ) : isResumesSuccess ?  (
        <ResumeList users={resumeData} />
        ) : null}
      </div>

      <div className="profile-chat">
        <h2>Chat Profile</h2>
        <JobChat jobId={jobId!} />
      </div>
    </div>
  );
}
