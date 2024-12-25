import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import UserDetails from "../components/UserDetails";
import { useFetchUserResume } from "../lib/useFetchUserResume";
import ResumeChat from "./ResumeChat";
import { useJobForResume } from "../lib/useJobForResume";
import JobList from "../components/JobList";

type Params = {
  userId: string;
};

export function UserProfile() {
  const { userId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchUserResume(userId!);
  const {
    isLoading: isJobsLoading,
    isSuccess: isJobsSuccess,
    isError: isJobsError,
    data: jobsData,
  } = useJobForResume(userId!);

  return (
    <div className="profile-container">
      <PageHeading name="User Profile" />
      <div className="side-details">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong...</div>
        ) : isSuccess ? (
          <UserDetails user={data[0]} />
        ) : null}
      </div>

      <div className="profile-table">
        <h2>All Matching Jobs</h2>
        {isJobsLoading ? (
          <div>Loading...</div>
        ) : isJobsError ? (
          <div>Something went wrong...</div>
        ) : isJobsSuccess ? (
          <JobList jobs={jobsData} />
        ) : null}
      </div>

      <div className="profile-chat">
        <h2>Chat Profile</h2>
        <ResumeChat resumeId={userId!} />
      </div>
    </div>
  );
}
