import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatMessages from "../components/ChatMessages";
import '../assets/styles/TalentChat.css';
import { Message } from "../utils/types";


type Props = {
  resumeId: string;
}

export default function ResumeChat({ resumeId }: Props) {
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    `${import.meta.env.VITE_RESUME_CHAT_URL}/${resumeId}`,
    {
      onOpen: () => console.log("Connection opened..."),
      shouldReconnect: (closeEvent: CloseEvent) => true,
      reconnectInterval: 30000,
      reconnectAttempts: 3
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: string) => {
    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    sendJsonMessage({ message }, true);
  };

  useEffect(() => {
    if (lastMessage !== null) {
      setMessages(prev => [...prev, { role: 'chatbot', content: lastMessage.data }]);
    }
  }, [lastMessage])

  return (
    <div className="">
      <p className="connection-status">Connection Status: {connectionStatus}...</p>
      <div className="talent-chat-messages">
        <ChatMessages messages={messages} />
      </div>
      <div className="talent-chat-box">
        <Chat sendMessage={sendMessage} />
      </div>
    </div>
  );
}
