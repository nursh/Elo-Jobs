
type Props = {
  name: string;
}

export function PageHeading({ name }: Props) {
  return (
    <h2 className="page-heading">{name}</h2>
  )
}