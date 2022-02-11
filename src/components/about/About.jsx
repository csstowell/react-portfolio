import "./about.css";
import plant from "../../img/plant.png";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.postimg.cc/fyNWm5rC/pexels-screen-post-9976569.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          “Programming isn’t about what you know; it’s about what you can figure
          out.” – Chris Pine
        </p>
        <p className="a-desc">
          I am extremely driven to building strong teams and investing in the
          people around me. I would love to work with a growing organization
          that would allow me to continue expanding my knowledge in software
          development.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Hackbright Academy 2021
            </h4>
            <p className="a-award-desc">
              Accelerated full-time software engineering program for women and
              genderdiverse folx that specializes in teaching competitive full
              stack software & web development, while also focusing on computer
              science fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
