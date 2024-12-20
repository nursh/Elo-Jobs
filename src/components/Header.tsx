
type Props = {
  name: string;
}

export function Header({ name }: Props) {
  return (
    <h1 className="heading">{name}</h1>
  )
}