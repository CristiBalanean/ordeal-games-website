import logo from "../assets/ordeal_games_logo.jpg";
import { Link } from "react-router-dom";

function Page()
{
    return(
        <div>
            <section className="hero">
                <img className="hero-logo" src={logo} alt="Ordeal Games"></img>
                <h1 className="hero-title">ORDEAL GAMES</h1>
                <h2 className="hero-tagline">Dare to Dream, Dare to Game.</h2>
                <div className="hero-buttons">
                    <Link to="/games" className="btn-primary">OUR GAMES</Link>
                    <Link to="/about" className="btn-outline">ABOUT US</Link>
                </div>
                <div className="scroll-indicator">▼</div>
            </section>

            <section className="featured">
                <div className="featured-info">
                    <p className="featured-label">Featured Release</p>
                    <h2 className="featured-title">Highway Dash</h2>
                    <p className="featured-desc">
                        An endless runner arcade racer that puts you in the driver's seat.
                        Dodge police chases, conquer leaderboards, and dominate the highways
                        across four immersive game modes with dynamic day/night cycles.
                    </p>
                    <Link to="/games" className="btn-outline">Learn More →</Link>
                </div>
                <div className="featured-image">
                    <iframe 
                        className="featured-video"
                        src="https://www.youtube.com/embed/Zee6rVKCL78"
                        title="Highway Dash Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="stats">
                <div className="stat">
                    <h3>2024</h3>
                    <p>Founded</p>
                </div>
                <div className="stat">
                    <h3>1</h3>
                    <p>Game Released</p>
                </div>
                <div className="stat">
                    <h3>Indie</h3>
                    <p>Studio</p>
                </div>
                <div className="stat">
                    <h3>∞</h3>
                    <p>Passion</p>
                </div>
            </section>
        </div>
    );
}

export default Page