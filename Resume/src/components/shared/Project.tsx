import "../../assets/CSS/abuot.css";

export default function Project() {
  return (
    <div className="experience padd-15">
      <h3 className="title">Experience</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa-regular fa-calendar fa-bounce"></i>
                <p> 3/2024 - 4/2024</p>
              </h3>
              <h4 className="timeline-title">E COMMERCE</h4>
              <p className="timeline-text">
                - This website is based on the shopee page and rewritten based
                on that page.
              </p>
              <p className="timeline-text">
                - Product data is called by api. structure used using RestAPIAll
                product data is called using Rest api.
              </p>
              <p className="timeline-text">
                - Related functions are all used using nodejs. Data such as
                login and registration are saved in MongoDB.
              </p>
              <p className="timeline-text">
                - Technology used: React , HTML, CSS, MongoDB, Git, Figma,
                Google Cloud Hosting.
              </p>

              <a
                href="https://shopping-clone.site"
                className="timeline-text"
                target="_blank"
              >
                - Link website: https://shopping-clone.site.
              </a>
              <a
                href="https://github.com/ducanhaovai/Shopping-React.git"
                target="_blank"
                className="timeline-text"
              >
                - Link github:
                https://github.com/ducanhaovai/Shopping-React.git.
              </a>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa-regular fa-calendar fa-bounce"></i>
                <p> 1/2024 - 1/2024</p>
              </h3>
              <h4 className="timeline-title">TIC-TAC-TOE</h4>
              <p className="timeline-text">
                - Design website layout using Figma with React
              </p>
              <p className="timeline-text">
                - Technology used: React, HTML, CSS, Git, Figma.
              </p>

              <a
                href="https://shopping-clone.site"
                className="timeline-text"
                target="_blank"
              >
                - Link website: https://shopping-clone.site.
              </a>
              <a
                href="https://github.com/ducanhaovai/Shopping-React.git"
                target="_blank"
                className="timeline-text"
              >
                - Link github:
                https://github.com/ducanhaovai/Shopping-React.git.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
