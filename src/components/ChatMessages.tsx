import Markdown from "react-markdown";
import { Message } from "../utils/types";

type Props = {
  messages: Message[];
}

export default function ChatMessages({ messages }: Props) {

  return (
    <div>
      <h4>Messages:</h4>
      {messages.map((message, idx) => {
        return (
          <div key={idx}>
            <h5 className="chat-role">{message.role}: </h5>
            <div className="chat-message">
              {message.role === 'chatbot'
                ? <Markdown>{message.content}</Markdown>
                : message.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}