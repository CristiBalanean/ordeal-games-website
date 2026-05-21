import { Link } from "react-router-dom";

function NotFound()
{
    return(
        <div style={{ paddingTop: 120, minHeight: "100vh", textAlign: "center" }}>
            <h1 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 120,
                color: "rgba(255, 255, 255, 0.1)",
                marginBottom: 0
            }}>404</h1>
            <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 32,
                marginBottom: 16
            }}>Page Not Found</h2>
            <p style={{
                color: "rgba(255, 255, 255, 0.45)",
                fontSize: 16,
                marginBottom: 40
            }}>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
    );
}

export default NotFound;