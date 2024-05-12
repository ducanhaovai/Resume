import { useState, useEffect } from "react";
import "../assets/CSS/home.css";
import anh from "../assets/anh.jpg";

export default function Home() {
  const [profession, setProfession] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const professions = [" Web Developer", "Intern Front-End", "T1 con"];

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        if (deleting) {
          setProfession((profession) =>
            profession.slice(0, profession.length - 1)
          );
          setCharIndex((charIndex) => charIndex - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setProfessionIndex(
              (professionIndex) => (professionIndex + 1) % professions.length
            );
          }
        } else {
          setProfession(
            (profession) =>
              profession + professions[professionIndex].charAt(charIndex)
          );
          setCharIndex((charIndex) => charIndex + 1);

          if (charIndex === professions[professionIndex].length) {
            setDeleting(true);
          }
        }
      },
      deleting ? 100 : 200
    );

    return () => clearTimeout(timeoutId);
  }, [profession, professionIndex, charIndex, deleting]);

  return (
    <section className="home active section" id="hero">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              <p>Hello, my name is </p>
              <span className="name">Mai Duc Anh</span>
            </h3>
            <h3 className="my-profession">
              <p>I'm a </p>
              <span className="typing">{profession}</span>
              <span className="typed-cursor">|</span>
            </h3>

            <p className="des">
              My name is Mai Duc Anh, a final-year student majoring in
              Information technology whose goal is to be Frontend intern in a
              professional work environment, aiming to accumlate experience in
              business and create seft-value in Frontend.
            </p>
          </div>

          <div className="home-img padd-15">
            <div className="img-wrapper">
              <img src={anh} alt="Original"></img>
              <div className="flip-img"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
