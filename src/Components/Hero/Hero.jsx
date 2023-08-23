import React from "react";
import styles from "./Hero.module.css";
import JSLogo from "./../../Assets/images/js.png";
import ReactLogo from "./../../Assets/images/react.png";
import FlutterLogo from "./../../Assets/images/flutter.png";

const Hero = () => {
  const logos = [
    {
      src: JSLogo,
      alt: "JS",
      info: "Who doesn't love JS?",
    },
    {
      src: ReactLogo,
      alt: "React",
      info: "React is love <3",
    },
    {
      src: FlutterLogo,
      alt: "Flutter",
      info: "Mobile Apps were never so easy.",
    },
  ];

  const handleNavAnchor = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero} id="home">
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            {/* <span>Singh</span> */}
          </div>
          <ul>
            <li>
              <a href="#home" onClick={handleNavAnchor}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNavAnchor}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavAnchor}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavAnchor}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Hello, I'm</p>
          <h1 className={styles.name}>
            Rashi <span>Kumari</span>
          </h1>
          <h2 className={styles.title}>
            A
            <ul className={styles.typewriter}>
              <li>
                <span>Software Engineer</span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
              <li>
                <span>Creative Thinker</span>
              </li>
            </ul>
          </h2>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btn_background}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.right}>
        <div className={styles.techlogocontainer}>
        {logos.map((logo, index) => (
        <div className={styles.techlogo} key={index}>
          <img src={logo.src} alt={logo.alt} />
          <div className={styles.techinfo}>{logo.info}</div>
        </div>
        ))}
       </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
