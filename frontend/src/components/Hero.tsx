import "../styles/Hero.css";
import { Service } from "../components/Service";
import { Project } from "../components/Project";
import { About } from "../components/About";
import { Footer } from "./Footer";

export function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="animation-small-title">
          <h3>✨ Available for new projects</h3>
        </div>
        <div className="hero-title">
          <h1>
            WHERE <span>CREATIVITY</span> MEETS TECHNICAL EXCELLENCE
          </h1>
        </div>
        <div className="hero-small-title">
          <p>
            We are a digital agency that builds modern websites and apps. We
            create fast, user-friendly, and reliable solutions to help
            businesses grow online.
          </p>
        </div>
        <div className="contact-btn-container">
          <button className="contact-btn1">Start Your Project</button>
          <button className="contact-btn2">View Showcase</button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-stick"></div>
        </div>
      </section>
        <Service />
        <Project />
        <About />
        <Footer />
    </>
  );
}
