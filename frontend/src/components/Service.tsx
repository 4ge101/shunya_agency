import MagicBento from "../components/MagicBento";

export function Service() {
  return (
    <section className="service-container">
      <div className="service-title">
        <div className="small-service-title">
          <span>WHAT WE DO</span>
        </div>
        <h1>Our Expertise</h1>
      </div>
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt
        enableMagnetism={false}
        clickEffect
        spotlightRadius={550}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </section>
  );
}
