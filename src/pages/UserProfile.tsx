import { useParams } from "react-router";
import { PageHeading } from "../components/Header";
import UserDetails from "../components/UserDetails";
import { useFetchUserResume } from "../lib/useFetchUserResume";

type Params = {
  userId: string;
};

export function UserProfile() {
  const { userId } = useParams<Params>();
  const { isLoading, isSuccess, isError, data } = useFetchUserResume(userId!);

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

      <div>
        <h2>Matching Jobs</h2>
        {/* <JobList jobs={matchedJobs} /> */}
      </div>
    </div>
  );
}
