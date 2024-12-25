import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import UserDetails from "../components/UserDetails";
import { useFetchUserResume } from "../lib/useFetchUserResume";
import ResumeChat from "./ResumeChat";
import { useJobForResume } from "../lib/useJobForResume";
import JobList from "../components/JobList";
import { ChangeEvent, useState } from "react";

type Params = {
  userId: string;
};

export function UserProfile() {
  const { userId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchUserResume(userId!);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(5);
  const {
    isLoading: isJobsLoading,
    isSuccess: isJobsSuccess,
    isError: isJobsError,
    data: jobsData,
  } = useJobForResume(userId!, count, filtered);

  const handleFilterSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    const val = evt.currentTarget.value;
    setFiltered(Boolean(val));
  }

  const handleCountSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(evt.currentTarget.value));
  }

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
        <h2>Showing {filtered ? "Filtered" : "Unfiltered"} Matching Jobs</h2>
        <select defaultValue={0} onChange={(handleFilterSelect)}>
          <option value={0}>Unfiltered</option>
          <option value={1}>Filtered</option>
        </select>
        <select defaultValue={5} onChange={(handleCountSelect)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
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
