import "../assets/CSS/abuot.css";
import Infor from "../components/shared/Infor";
export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Abuot Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  <span>
                    I'm Mai Duc Anh <strong> Web Developer</strong>,
                    <strong> Web Designer</strong>
                  </span>
                </h3>
                <span>
                  I am a senior at the BTEC FPT British College. Currently my
                  main job is Web Developer
                </span>
              </div>
            </div>
            <div className="row">
              <Infor />
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
