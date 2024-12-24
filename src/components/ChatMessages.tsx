import Markdown from "react-markdown";
import { Message } from "../utils/types";

type Props = {
  messages: Message[];
}

export default function ChatMessages({ messages }: Props) {

  return (
    <div>
      Messages:
      {messages.map((message, idx) => {
        return (
          <div key={idx}>
            <h5 className="chat-role">{message.role}: </h5>
            <p className="chat-message">
              {message.role === 'chatbot'
                ? <Markdown>{message.content}</Markdown>
                : message.content}
            </p>
          </div>
        )
      })}
    </div>
  )
}