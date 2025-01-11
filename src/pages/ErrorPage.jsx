import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="error-page">
            <h1 className="error-title">Oops! Something went wrong.</h1>
            <p className="error-message">The page you are looking for does not exist or an error occurred.</p>
            <button className="error-button" onClick={goHome}>
                Go Back to Home
            </button>
        </div>
    );
}
