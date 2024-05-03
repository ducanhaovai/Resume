import React from "react";
import "../../assets/CSS/abuot.css";

export default function Infor() {
  return (
    <div className="personal-info padd-15">
      <div className="row">
        <div className="info-item padd-15">
          <p>
            Birthday: <span>03 March 2003</span>
          </p>
        </div>
        <div className="info-item padd-15">
          <p>
            Age:<span>21</span>
          </p>
        </div>
        <div className="info-item padd-15">
          <p>
            Email:
            <span>
              <a href="mailto:ducanhmai916@gmail.com">ducanhmai916@gmail.com</a>
            </span>
          </p>
        </div>
        <div className="info-item padd-15">
          <p>
            Facebook:
            <span>
              <a href="https://www.facebook.com/ducanhcutehihi" target="_blank">
                Duc Anh Mai
              </a>
            </span>
          </p>
        </div>
        <div className="info-item padd-15">
          <p>
            City: <span>Ha Noi - Viet Nam</span>
          </p>
        </div>

        <div className="info-item padd-15">
          <p>
            Website: <span>None</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="buttons">
          <a href="" className="btn">
            Download My CV
          </a>
          <p data-section-index="1" className="btn hire-me">
            Contact Me
          </p>
        </div>
      </div>
    </div>
  );
}
