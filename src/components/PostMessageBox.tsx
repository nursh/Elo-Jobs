import { useState } from "react";

type Props = {
    sendPostMessage: (message: string) => void;
};

export default function PostMessageBox({ sendPostMessage }: Props) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        sendPostMessage(message);
        setMessage("");

        setTimeout(() => {
            setLoading(false);
            setShowMessage(true);
        }, 25000); // 20 seconds
    };

    return (
        <div>
            {loading && <div className="loading-overlay">
                <div className="loading-spinner"></div>
            </div>}
            <form onSubmit={handleSubmit} className="post-message-box">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message"
                />
                <button type="submit">Send</button>
            </form>
            {loading && <div className="loading-message"><strong>Loading...</strong></div>}
            {showMessage && <div className="post-message">Interact with chatbot</div>}
        </div>
    );
}