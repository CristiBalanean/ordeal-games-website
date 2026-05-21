import { Link } from "react-router-dom";
import { useState } from "react";

function Games() {
    const [current, setCurrent] = useState(0);

    const games = [
        {
            type: "released",
            title: "Highway Dash",
            tags: ["Arcade", "Racing", "Endless Runner", "Mobile"],
            description: "Get ready for the ultimate adrenaline-fueled thrill ride! Highway Dash is an endless runner arcade racing game featuring four immersive game modes, dynamic day/night cycles, and intense police pursuits. Unlock high-performance cars and power-ups, compete on global leaderboards, and leave your mark on the highways.",
            videoId: "Zee6rVKCL78",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.OrdealGAMES.HighwayDash",
            youtubeUrl: "https://www.youtube.com/@ordealgamesofficial",
            features: [
                { icon: "🎮", title: "4 Game Modes", desc: "Endless variety of gameplay" },
                { icon: "🌙", title: "Day/Night Cycle", desc: "Dynamic visual experience" },
                { icon: "🚔", title: "Police Chases", desc: "Heart-pounding pursuits" },
                { icon: "🏆", title: "Leaderboards", desc: "Compete globally" },
            ],
        },
        {
            type: "coming-soon",
            title: "Untitled Project",
            description: "Something new is brewing. Stay tuned for our next adventure.",
        },
    ];

    const game = games[current];

    const prev = () => setCurrent(current === 0 ? games.length - 1 : current - 1);
    const next = () => setCurrent(current === games.length - 1 ? 0 : current + 1);

    return (
        <div style={{ paddingTop: 120 }}>
            <div className="games-container">
                <p className="games-label">Portfolio</p>
                <h1 className="games-title">Our Games</h1>
                <p className="games-subtitle">
                    Every game we create is a new ordeal — a challenge we pour our hearts into.
                </p>

                <div className="carousel">
                    <button className="carousel-arrow carousel-arrow-left" onClick={prev}>‹</button>

                    <div className="carousel-slide" key={current}>
                        {game.type === "released" ? (
                            <div className="game-card">
                                <div className="game-card-video">
                                    <iframe
                                        className="featured-video"
                                        src={`https://www.youtube.com/embed/${game.videoId}`}
                                        title={`${game.title} Trailer`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="game-card-info">
                                    <div className="game-tags">
                                        {game.tags.map(tag => (
                                            <span key={tag} className="game-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <p className="game-card-desc">{game.description}</p>
                                    <div className="game-card-links">
                                        <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                            Google Play ↗
                                        </a>
                                        <a href={game.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                                            Watch Trailer ↗
                                        </a>
                                    </div>
                                    <div className="game-features">
                                        {game.features.map((f, i) => (
                                            <div key={i} className="game-feature">
                                                <span>{f.icon}</span>
                                                <div>
                                                    <h4>{f.title}</h4>
                                                    <p>{f.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="coming-soon">
                                <p className="coming-soon-label">Coming Soon</p>
                                <h3 className="coming-soon-title">{game.title}</h3>
                                <p className="coming-soon-desc">{game.description}</p>
                            </div>
                        )}
                    </div>

                    <button className="carousel-arrow carousel-arrow-right" onClick={next}>›</button>
                </div>

                <div className="carousel-dots">
                    {games.map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot ${i === current ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Games;