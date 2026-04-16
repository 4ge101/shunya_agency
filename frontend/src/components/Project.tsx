import "../styles/Hero.css";

export function Project() {
  return (
    <section className="project-container">
      <div className="blank-container">
        <div className="project-title">
          <div className="small-project-title">
            <span>FEATURED WORK</span>
          </div>
          <h1>Our Latest Projects</h1>
        </div>
        <div className="project-card-container">
          <div className="nothing-card-message">
            <p>No projects yet. Add some in the admin dashboard!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
