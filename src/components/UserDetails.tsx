import { getExperience, getLanguages, getSkills, getSpecialization } from "../utils/dataFormat"
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
        <ProfileDetail title="gender" value={user.gender} />
        <ProfileDetail title="citizenship" value={user.citizenship || 'None'} />
        <ProfileDetail title="languages" value={getLanguages(user.languages)} />
        <ProfileDetail title="specializations" value={getSpecialization(user.specialization)} />
        <ProfileDetail title="Marital Status" value={user.marital_status} />
        <ProfileDetail title="Experience(Years)" value={user.years_of_experience} />
        <ProfileDetail title="Education" value={user.level_of_education} />
        <ProfileDetail title="Skills" value={getSkills(user.skills)} />
        <ProfileDetail title="Experience" value={getExperience(user.experience)} />
      </div>
    </>
  )
}