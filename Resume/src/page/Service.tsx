export default function Service() {
  return (
    <div className="service section " id="service">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Service</h2>
          </div>
        </div>

        <div className="row">
          <div className="service-item">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-laptop-code"></i>
              </div>
              <h4>Web Developer</h4>
              <p>
                I'm a passionate web designer with a keen eye for aesthetics and
                user experience. With a strong background in HTML, CSS, and
                responsive design, I create visually appealing and functional
                websites that leave a lasting impression. Let's collaborate to
                bring your web projects to life!
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-brands fa-react"></i>
              </div>
              <h4>React</h4>
              <p>
                I'm an enthusiastic React developer, infusing creativity and
                innovation into web applications. My expertise ranges from
                designing interactive user interfaces to implementing complex
                business logic with JavaScript. My affinity for responsive
                design and clean architecture ensures that the applications I
                build are not only visually striking but also robust and
                maintainable. Let's connect to transform your ideas into a
                dynamic user experience with React!
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-cloud"></i>
              </div>
              <h4>Clouds</h4>
              <p>
                My expertise lies in streamlining development pipelines,
                automating deployments, and optimizing infrastructure on leading
                cloud platforms. I thrive on driving efficiency and scalability
                in the world of cloud computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
