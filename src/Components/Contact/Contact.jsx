import React from "react";
import styles from "./Contact.module.css";
import Map from "./../../Assets/images/map.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import Resume from "./../../Assets/images/Resume.jpg";

const Contact = () => {
  const nameRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const [error, setError] = React.useState("");

  const handleContactSend = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    if (name && message) {
      setError("");
      window.open(
        `mailto:rashikumari617@gmail.com?subject=Message from ${name}&body=${message}`
      );
    } else if (!name) {
      setError("Without a name, I won't know who to reply to :(");
    } else if (!message) {
      setError("Without a message, I won't know what to reply :(");
    }
  };

  const handleResumeDownload = () => {
    window.open(
      "https://docs.google.com/document/d/1veYmYB4vWrUtPtzSwjJwqtPfa7wPXy_LMo10zcSbsJg/edit?usp=sharing"
    );
  };

  const handleMapEvents = () => {
    window.open("https://goo.gl/maps/pvVxRZBYbdg2BfWR9");
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.map} onClick={handleMapEvents}>
            <img src={Map} alt="Map" />
            <FaMapMarkerAlt className={styles.mapMarker} />
          </div>
          <div className={styles.address}>
            <IoLocationOutline className={styles.icon} />
            <span>
                Puraini Bazar Madhepura marwari Tola Bihar India-852116
            </span>
          </div>
          <div className={styles.callToActions}>
            <button
              className={styles.resumeDownloadButton}
              onClick={handleResumeDownload}
            >
              Download Resume
              <div className={styles.resumePreviewPopup}>
                <img src={Resume} alt="Resume" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <form target="blank" className={styles.form}>
            <div className={styles.formInput} style={{ gridArea: "message" }}>
              <label htmlFor="message">Your Messsage</label>
              <textarea
                ref={messageRef}
                id="message"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <div className={styles.formInput} style={{ gridArea: "name" }}>
              <label htmlFor="name">Name</label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              onClick={handleContactSend}
              style={{ gridArea: "send" }}
            >
              Mail Me
            </button>
            <p className={styles.formError} style={{ gridArea: "error" }}>
              {error}
            </p>
          </form>
          <h2 className={styles.title} style={{ marginTop: "1rem" }}>
            I'm Social Too
          </h2>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/rashi-kumari-55b0471bb/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedin className={styles.icon} />
            </a>
            <a
              href="
                     https://github.com/rashikumari771"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className={styles.icon} />
            </a>
            <a
              href="mailto:
                            rashikumari617@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail className={styles.icon} />
            </a>
            <a href="tel:+91 9798592141" target="_blank" rel="noreferrer">
              <AiTwotonePhone className={styles.icon} />
            </a>
            <a
              href="https://codeforces.com/profile/20je0771"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodeforces className={styles.icon} />
            </a>
            <a
              href="https://www.codechef.com/users/rashiagwl2002"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodechef className={styles.icon} />
            </a>
            <a
              href="https://leetcode.com/rashi_kumari12344/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
