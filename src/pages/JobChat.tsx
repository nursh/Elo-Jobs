import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatMessages from "../components/ChatMessages";
import '../assets/styles/TalentChat.css';
import { Message } from "../utils/types";

type Props = {
    jobId: string;
    filtered: boolean;
}

export default function JobChat({ jobId, filtered }: Props) {
    const [reconnectAttempts, setReconnectAttempts] = useState(0);
    const maxReconnectAttempts = 4;

    const url = filtered ? `${import.meta.env.VITE_JOB_CHAT_URL_FILTERED}/${jobId}` : `${import.meta.env.VITE_JOB_CHAT_URL}/${jobId}`;
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
        url,
        {
            onOpen: () => {
                console.log("Connection opened...");
                setReconnectAttempts(0);
            },
            onClose: () => {
                console.log("Connection closed...");
                setReconnectAttempts(prev => prev + 1);
            },
            onError: () => console.log("Connection error..."),
            shouldReconnect: () => reconnectAttempts < maxReconnectAttempts,
            retryOnError: true,
            reconnectInterval: 15000,
            reconnectAttempts: maxReconnectAttempts
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
    }, [lastMessage]);

    return (
        <div className="">
            {reconnectAttempts >= maxReconnectAttempts ? (
                <div className="error-screen">
                    <p>Failed to connect. Please return to the <a href="/job-listing">job listing</a> or <a href="/user-listing">user listing</a> page.</p>
                </div>
            ) : readyState !== ReadyState.OPEN ? (
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