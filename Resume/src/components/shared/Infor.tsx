import "../../assets/CSS/abuot.css";

export default function Infor() {
  const infos = [
    { label: "Birthday", value: "03 March 2003" },
    { label: "Age", value: "21" },
    {
      label: "Email",
      value: "ducanhmai916@gmail.com",
      link: "mailto:ducanhmai916@gmail.com",
    },
    {
      label: "Facebook",
      value: "Duc Anh Mai",
      link: "https://www.facebook.com/ducanhcutehihi",
    },
    { label: "City", value: "Ha Noi - Viet Nam" },
    { label: "Website", value: "Will be add later" },
  ];

  return (
    <div className="personal-info padd-15">
      <div className="row">
        {infos.map((info, index) => (
          <div className="info-item padd-15" key={index}>
            <p>
              {info.label}:{" "}
              <span>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.label === "Facebook" ? "_blank" : ""}
                  >
                    {info.value}
                  </a>
                ) : (
                  info.value
                )}
              </span>
            </p>
          </div>
        ))}
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
