import { useParams } from "react-router";
import { Header } from "../components/Header";
import { jobs, users } from "../utils/data";

type Params = {
  userId: string;
}

export function UserProfile() {
  const { userId } = useParams<Params>();
  const user = users.find(({ id }) => id === Number(userId))!;
  const matchedJobs = jobs.filter(({ requiredEmploymentStatus }) => requiredEmploymentStatus === user .employmentStatus)

  return (
    <>
      <Header name="User Profile" />
    </>
  )
}