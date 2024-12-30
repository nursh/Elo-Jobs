import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import UserDetails from "../components/UserDetails";
import { useFetchUserResume } from "../lib/useFetchUserResume";
import ResumeChat from "./ResumeChat";
import { useJobForResume } from "../lib/useJobForResume";
import JobList from "../components/JobList";
import { ChangeEvent, useState, useEffect } from "react";
import "../assets/styles/JobProfile.css";

type Params = {
  userId: string;
};

export function UserProfile() {
  const { userId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchUserResume(userId!);
  const [filtered, setFiltered] = useState(true);
  const [count, setCount] = useState(15);
  const {
    isLoading: isJobsLoading,
    isSuccess: isJobsSuccess,
    isError: isJobsError,
    data: jobsData,
    refetch: refetchJobs,
  } = useJobForResume(userId!, count, filtered);

  const handleFilterSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    const val = evt.currentTarget.value;
    setFiltered(Boolean(Number(val)));
  }

  const handleCountSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(evt.currentTarget.value));
  }

  useEffect(() => {
    refetchJobs();
  }, [filtered, count]);

  const sortedJobsData = jobsData?.slice().sort((a, b) => (b.normalized_score ?? 0) - (a.normalized_score ?? 0)) || [];

  return (
      <div className="profile-container">
        <PageHeading name="User Profile" />
        <div className="profile-content">
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
            <h2>Showing {filtered ? "Filtered" : "Unfiltered"} Matching Jobs</h2>
            <select defaultValue={1} onChange={handleFilterSelect}>
              <option value={0}>Unfiltered</option>
              <option value={1}>Filtered</option>
            </select>
            <select defaultValue={15} onChange={handleCountSelect}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            {isJobsLoading ? (
                <div>Loading...</div>
            ) : isJobsError ? (
                <div>Something went wrong...</div>
            ) : isJobsSuccess ? (
                <JobList jobs={sortedJobsData} />
            ) : null}
          </div>

          <div className="profile-chat">
            <h2>Chat Profile</h2>
            {sortedJobsData.length === 0 ? (
                <div>No data to use for chat.</div>
            ) : (
                <ResumeChat resumeId={userId!} filtered={filtered} />
            )}
          </div>
        </div>
      </div>
  );
}