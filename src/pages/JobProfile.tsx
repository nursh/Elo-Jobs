import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import JobDetails from "../components/JobDetails";
import "../assets/styles/JobProfile.css";
import ResumeList from "../components/ResumeList";
import { useFetchJob } from "../lib/useFetchJob";
import { useResumeForJob } from "../lib/useResumeForJob";
import JobChat from "./JobChat";
import { ChangeEvent, useState, useEffect } from "react";

type Params = {
  jobId: string;
};

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchJob(jobId!);
  const [filtered, setFiltered] = useState(true);
  const [count, setCount] = useState(15);
  const {
    isLoading: isResumesLoading,
    isSuccess: isResumesSuccess,
    isError: isResumeError,
    data: resumeData,
    refetch: refetchResumes,
  } = useResumeForJob(jobId!, count, filtered);

  const handleFilterSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    const val = evt.currentTarget.value;
    setFiltered(Boolean(Number(val)));
  }

  const handleCountSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(evt.currentTarget.value));
  }

  useEffect(() => {
    refetchResumes();
  }, [filtered, count]);

  const sortedResumeData = resumeData?.slice().sort((a, b) => (b.normalized_score ?? 0) - (a.normalized_score ?? 0)) || [];


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
        <h2>Showing {filtered ? "Filtered" : "Unfiltered" } Matching Resumes</h2>
        <select defaultValue={1} onChange={(handleFilterSelect)}>
          <option value={0}>Unfiltered</option>
          <option value={1}>Filtered</option>
        </select>
        <select defaultValue={15} onChange={(handleCountSelect)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        { isResumesLoading ? (
          <div>Loading...</div>
        ) : isResumeError ? (
          <div>Something went wrong...</div>
        ) : isResumesSuccess ?  (
        <ResumeList users={sortedResumeData} />
        ) : null}
      </div>

      <div className="profile-chat">
        <h2>Chat Profile</h2>
        <JobChat jobId={jobId!} filtered={filtered} />
      </div>
    </div>
  );
}
