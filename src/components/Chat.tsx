type Props = {
  sendMessage: (message: string) => void;
}

export default function Chat({ sendMessage }: Props) {

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string }
    }
    const query = target.query.value;
    sendMessage(query);
    target.query.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Enter message here:</label>
        <textarea placeholder="Enter message here" name="query" id="query" rows={3} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}