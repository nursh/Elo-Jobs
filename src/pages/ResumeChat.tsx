import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatMessages from "../components/ChatMessages";
import '../assets/styles/TalentChat.css';
import { Message } from "../utils/types";


type Props = {
  resumeId: string;
  filtered: boolean;
}

export default function ResumeChat({ resumeId, filtered }: Props) {
    const url = filtered ? `${import.meta.env.VITE_RESUME_CHAT_URL_FILTERED}/${resumeId}` : `${import.meta.env.VITE_RESUME_CHAT_URL}/${resumeId}`;
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    url,
    {
      onOpen: () => console.log("Connection opened..."),
      onClose: () => console.log("Connection closed..."),
      onError: () => console.log("Connection error..."),
      shouldReconnect: () => true,
      retryOnError:  true,
      reconnectInterval: 15000,
      reconnectAttempts: 4
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

  // return (
  //   <div className="">
  //     <p className="connection-status">Connection Status: {connectionStatus}...</p>
  //     <div className="talent-chat-messages">
  //       <ChatMessages messages={messages} />
  //     </div>
  //     <div className="talent-chat-box">
  //       <Chat sendMessage={sendMessage} />
  //     </div>
  //   </div>
  // );
    return (
        <div className="">
            {readyState !== ReadyState.OPEN ? (
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <>
                    <p className="connection-status">Connection Status: {connectionStatus}...</p>
                    <div className="talent-chat-messages">
                        <ChatMessages messages={messages} />
                    </div>
                    <div className="talent-chat-box">
                        <Chat sendMessage={sendMessage} />
                    </div>
                </>
            )}
        </div>
    );
}
