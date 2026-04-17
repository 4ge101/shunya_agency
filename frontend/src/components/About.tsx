import "../styles/Hero.css";

export function About() {
  const stats = [
    { value: "150", label: "PROJECTS DELIVERED" },
    { value: "45", label: "TEAM MEMBERS" },
    { value: "98%", label: "CLIENT SATISFACTION" },
    { value: "6+", label: "YEARS EXPERIENCE" },
  ];

  return (
    <>
      <section className="about-container">
        <div className="about-left">
          <div className="about-label">
            <span className="about-label-line" />
            <span className="about-label-text">ABOUT US</span>
          </div>
          <h1 className="about-heading">We are a team of digital innovators</h1>
          <p className="about-description">
            Born in 2025, Shunya Agency was built on a single belief — that
            great digital products change how people experience the world. We
            bring together creative thinkers, engineers, and strategists to
            craft experiences that are bold, purposeful, and built to last. From
            early-stage startups to established enterprises, we partner with
            visionaries who refuse to settle for ordinary.
          </p>
          <ul className="about-list">
            <li>
              <span className="about-list-dot" />
              <div>
                <strong>Innovative Approach</strong>
                <p>
                  We push boundaries and explore new technologies to create
                  cutting-edge solutions.
                </p>
              </div>
            </li>
            <li>
              <span className="about-list-dot" />
              <div>
                <strong>Client-Centric</strong>
                <p>
                  Your success is our success. We invest deeply in understanding
                  your vision and goals.
                </p>
              </div>
            </li>
            <li>
              <span className="about-list-dot" />
              <div>
                <strong>Excellence</strong>
                <p>
                  We maintain the highest standards in every project, delivering
                  quality that exceeds expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-stats">
          <div className="stat-card stat-purple">
            <span className="stat-number">1+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-card stat-blue">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-card stat-red">
            <span className="stat-number">6+</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-card stat-teal">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </section>

      <section className="stats-section">
        {stats.map((stat, i) => (
          <div className="stats-item" key={i}>
            <span className="stats-number">{stat.value}</span>
            <span className="stats-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <div className="big-box-container">
        <div className="big-box">
          <div className="big-box-title">
            <h1>Let's Design Something Unforgettable</h1>
          </div>
          <div className="big-box-paragraph">
            <p>Ready to shape your ideas into something powerful?</p>
          </div>
          <div className="box-btn">
            <button>Start You Journey</button>
          </div>
        </div>
      </div>
    </>
  );
}
