import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        setSending(true);

        emailjs.send(
            "service_serw9ij",
            "template_zbw7xyh",
            {
                name: name,
                email: email,
                message: message,
            },
            "W8wpsi7BjSY6b8CsV"
        )
        .then(() => {
            setSubmitted(true);
            setSending(false);
        })
        .catch((error) => {
            console.error("Failed to send:", error);
            setSending(false);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <div style={{ paddingTop: 120 }}>
            <div className="contact-container">
                <p className="contact-label">Get In Touch</p>
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Have questions, feedback, or a business inquiry? We'd love to hear from you.
                </p>

                {submitted ? (
                    <div className="contact-success">
                        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                        <h3 className="contact-success-title">Message Sent!</h3>
                        <p className="contact-success-desc">We'll get back to you as soon as we can.</p>
                    </div>
                ) : (
                    <div className="contact-form">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="form-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell us what's on your mind..."
                                className="form-textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="btn-primary"
                            style={{ width: "100%" }}
                            disabled={sending}
                        >
                            {sending ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </div>
                )}

                <div className="contact-socials">
                    <p className="contact-socials-label">Find us on</p>
                    <div className="contact-socials-links">
                        <a href="https://www.youtube.com/@ordealgamesofficial" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.instagram.com/ordealgames/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.tiktok.com/@ordealgames" target="_blank" rel="noopener noreferrer">TikTok</a>
                        <a href="https://twitter.com/ordealgames" target="_blank" rel="noopener noreferrer">X</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;