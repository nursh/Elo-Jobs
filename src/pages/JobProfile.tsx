import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import JobDetails from "../components/JobDetails";
import "../assets/styles/JobProfile.css";
import ResumeList from "../components/ResumeList";
import { useFetchJob } from "../lib/useFetchJob";
import { useResumeForJob } from "../lib/useResumeForJob";
import JobChat from "./JobChat";

type Params = {
  jobId: string;
};

export default function JobProfile() {
  const { jobId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchJob(jobId!);
  const {
    isLoading: isResumesLoading,
    isSuccess: isResumesSuccess,
    isError: isResumeError,
    data: resumeData,
  } = useResumeForJob(jobId!);

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
        <h2>All Matching Resumes</h2>
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
