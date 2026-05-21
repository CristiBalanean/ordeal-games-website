import logo from "../assets/ordeal_games_logo.jpg";

function About() {
    return (
        <div style={{ paddingTop: 120}}>
            <div className="about-container">
                <p className="about-label">Who We Are</p>
                <h1 className="about-title">About Ordeal Games</h1>

                <div className="about-intro">
                    <div className="about-logo">
                        <img src={logo} alt="Ordeal Games Logo" />
                    </div>
                    <div>
                        <h2 className="about-motto">Dare to Dream, Dare to Game.</h2>
                        <p className="about-motto-sub">That's not just our tagline — it's our philosophy.</p>
                    </div>
                </div>

                <div className="about-text">
                    <p>
                        Ordeal Games is an independent game studio driven by a passion for creating
                        thrilling gaming experiences. We believe every great game is born from an ordeal —
                        the relentless grind of turning a spark of imagination into something players
                        can feel, compete in, and love.
                    </p>
                    <p>
                        Founded by a solo developer with big ambitions, we launched our first title
                        <strong> Highway Dash</strong> — an arcade racing game that captures the pure 
                        rush of weaving through traffic at high speed. It was a labour of love, built 
                        from the ground up.
                    </p>
                    <p>
                        We're just getting started. The road ahead is full of new ideas, new genres,
                        and new challenges. Whether it's mobile, desktop, or beyond — we're committed
                        to making games that are worth the ordeal of creating them.
                    </p>
                </div>

                <div className="about-values">
                    <div className="about-value">
                        <h3>Passion First</h3>
                        <p>Every line of code, every pixel, every decision is driven by love for gaming.</p>
                    </div>
                    <div className="about-value">
                        <h3>Player Focused</h3>
                        <p>We build for the players. Their experience is everything.</p>
                    </div>
                    <div className="about-value">
                        <h3>Always Evolving</h3>
                        <p>We learn, iterate, and push boundaries with every project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;