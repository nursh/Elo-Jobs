import { useState } from "react";
import "../assets/styles/PasswordPage.css";

type Props = {
    onAccessGranted: () => void;
};

export default function PasswordPage({ onAccessGranted }: Props) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "CGBDataProtected") {
            onAccessGranted();
        } else {
            setError("Incorrect password. Please try again.");
        }
    };

    return (
        <div className="password-page">
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}