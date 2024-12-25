type Props = {
  title: string;
  value: string | number;
}

export default function ProfileDetail({ title, value }: Props) {
  return (
    <div className="profile-detail">
      <h5>{title}:</h5>
      <p>{value}</p>
    </div>
  )
}