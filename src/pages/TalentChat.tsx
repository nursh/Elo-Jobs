import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatMessages from "../components/ChatMessages";
import '../assets/styles/TalentChat.css';
import { Message } from "../utils/types";
import { PageHeading } from "../components/Header";
import PostMessageBox from "../components/PostMessageBox";


export default function TalentChat() {
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    import.meta.env.VITE_TALENT_URL,
    {
      onOpen: () => console.log("Connection opened..."),
      retryOnError: true,
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

  const sendPostMessage = (message: string) => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/search/resumes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: message,
    })
      .then((response) => response.json());
  }
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
    <div className="talent-chat-container">
        <PageHeading name="Talent Discuss" />
        {/*<Chat sendMessage={sendPostMessage} />*/}
        <PostMessageBox sendPostMessage={sendPostMessage} />
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
