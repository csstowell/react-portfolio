import "./about.css"
import plant from "../../img/plant.png"

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
              subtitle goes here ................
          </p>
          <p className="a-desc">
              description goes here ................
          </p>
      </div>
    </div>
  )
}

export default About
