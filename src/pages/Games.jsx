import { Link } from "react-router-dom";

function Games()
{
    return(
        <div style={{ paddingTop: 120}}>
            <div className="games-container">
                <p className="games-label">Portofolio</p>
                <h1 className="games-title">Our Games</h1>
                <p className="games-subtitle">
                    Every game we create is a new ordeal — a challenge we pour our hearts into.
                </p>

                <div className="game-card">
                    <div className="game-card-video">
                        <iframe
                            className="featured-video"
                            src="https://www.youtube.com/embed/Zee6rVKCL78"
                            title="Highway Dash Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="game-card-info">
                        <div className="game-tags">
                            <span className="game-tag">Arcade</span>
                            <span className="game-tag">Racing</span>
                            <span className="game-tag">Endless Runner</span>
                            <span className="game-tag">Mobile</span>
                        </div>
                        <p className="game-card-desc">
                            Get ready for the ultimate adrenaline-fueled thrill ride! Highway Dash is an endless
                            runner arcade racing game featuring four immersive game modes, dynamic day/night
                            cycles, and intense police pursuits. Unlock high-performance cars and power-ups,
                            compete on global leaderboards, and leave your mark on the highways.
                        </p>
                        <div className="game-card-links">
                            <a href="https://play.google.com/store/apps/details?id=com.OrdealGAMES.HighwayDash"
                               target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Google Play ↗
                            </a>
                            <a href="https://www.youtube.com/@ordealgamesofficial"
                               target="_blank" rel="noopener noreferrer" className="btn-outline">
                                Watch Trailer ↗
                            </a>
                        </div>
                        <div className="game-features">
                            <div className="game-feature">
                                <span>🎮</span>
                                <div>
                                    <h4>4 Game Modes</h4>
                                    <p>Endless variety of gameplay</p>
                                </div>
                            </div>
                            <div className="game-feature">
                                <span>🌙</span>
                                <div>
                                    <h4>Day/Night Cycle</h4>
                                    <p>Dynamic visual experience</p>
                                </div>
                            </div>
                            <div className="game-feature">
                                <span>🚔</span>
                                <div>
                                    <h4>Police Chases</h4>
                                    <p>Heart-pounding pursuits</p>
                                </div>
                            </div>
                            <div className="game-feature">
                                <span>🏆</span>
                                <div>
                                    <h4>Leaderboards</h4>
                                    <p>Compete globally</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="coming-soon">
                    <p className="coming-soon-label">Coming Soon</p>
                    <h3 className="coming-soon-title">Untitled Projet</h3>
                    <p className="coming-soon-desc">
                        Something new is brewing. Stay tuned for our next adventure.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Games;