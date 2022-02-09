import "./about.css"
import plant from "../../img/plant.png"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
          </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          “Programming isn’t about what you know; it’s about what you can figure out.” – Chris Pine
          </p>
          <p className="a-desc">
            I am extremely driven to building strong teams and investing in the people around me. 
            I would love to work with a growing organization that would allow me to continue expanding 
            my knowledge in software development.
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Hackbright Academy Certificate 2021</h4>
              <p className="a-award-desc">Description of award goes here...</p>

            </div>
          </div>
      </div>
    </div>
  )
}

export default About
