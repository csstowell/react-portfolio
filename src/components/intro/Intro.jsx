import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="intro">
      {/* INTRO LEFT */}
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, My name is</h2>
          <h1 className="intro-name">Charlotte Stowell</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">JavaScript</div>
              <div className="intro-title-item">Python</div>
              <div className="intro-title-item">React</div>
              <div className="intro-title-item">HTML</div>
              <div className="intro-title-item">CSS</div>
            </div>
          </div>

          <p className="intro-description">
            I am a software developer with a focus on creating engaging and
            functional user interfaces. You can currently find me locally in San
            Francisco, California but love a change of pace, traveling, and new
            experiences.
          </p>
        </div>

        {/* ICON LINKS & RESUME */}
        {/* <div className="social-info">
          <div className="icons">
            <a href="https://www.facebook.com/csstowell/">
              <i className="fa fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://github.com/csstowell">
              <i className="fa fa-github-square fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/charlottestowell/">
              <i className="fa fa-linkedin-square fa-3x"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCkIZQWW1eGfY6_pVpblRvbA">
              <i className="fa fa-youtube-square fa-3x"></i>
            </a>
          </div>

          <div className="resume">
            <a href="charlottestowell.pdf" download="charlottestowell.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div> */}

        {/* SVG */}
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>

      </div>

      {/* INTRO RIGHT */}
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
