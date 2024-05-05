import "../../assets/CSS/abuot.css";
export default function Education() {
  return (
    <div className="education padd-15">
      <h3 className="title">Education</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h2 className="timeline-date">
                <i className="fa-regular fa-calendar fa-bounce"></i>
                <p> 2021 - 2024</p>
              </h2>
              <h4 className="timeline-title">BTEC FPT British College</h4>
              <h4 className="timeline-text">Specialized: Web developer</h4>
              <p className="timeline-text">
                - Learn all possible languages for website development
              </p>
              <p className="timeline-text">
                - Deploying applications using Docker, Git, and Clouds AWS
              </p>
              <p className="timeline-text">
                - Learn some other frameworks to support website developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
