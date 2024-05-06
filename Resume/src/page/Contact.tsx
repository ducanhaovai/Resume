import { useEffect, useState } from "react";
import "../assets/CSS/contact.css";

export default function Contact() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const updateClock = () => {
      const date = new Date();

      setCurrentDay(daysOfWeek[date.getDay()]);
      setCurrentDate(
        `${date.getDate()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${date.getFullYear()}`
      );
      setCurrentTime(
        `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
      );
    };
    const intervalId = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Question ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row" id="contact">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4>Email: </h4>
            <p>ducanhmai916@gmail.com</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-globe-asia" aria-hidden="true"></i>
            </div>
            <h4>Website: </h4>
            <p>Add later</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marked" aria-hidden="true"></i>
            </div>
            <h4>Location: </h4>
            <p>Ha Noi - Viet Nam</p>
          </div>
        </div>

        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>
        <div id="clock">
          <p id="date">{currentDate}</p>
          <p id="time">{currentTime}</p>
          <p id="day">{currentDay}</p>
        </div>
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
