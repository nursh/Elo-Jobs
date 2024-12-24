import { getLanguages } from "../utils/dataFormat"
import { UserReal } from "../utils/types"
import ProfileDetail from "./ProfileDetail"

type Props = {
  user: UserReal
}

export default function UserDetails({ user }: Props) {

  return (
    <>
      <div className="profile-heading">
        <h2>{user.name}</h2>
      </div>

      <div className="profile-details">
        <ProfileDetail title="summary" value={user.summary} />
        <ProfileDetail title="email" value={user.email} />
        <ProfileDetail title="age" value={user.age} />
        <ProfileDetail title="citizenship" value={user.citizenship || 'None'} />
        <ProfileDetail title="languages" value={getLanguages(user.languages.map(({ name }) => name))} />
      </div>
    </>
  )
}