import '../styles/Nav.css'
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <section className="nav-container">
        <div className="nav-logo">
            SHUNYA
        </div>
        <nav>
            <ul>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="talk-btn-container">
            <button>Let's Talk</button>
        </div>
    </section>
  )
}