import React, { useEffect } from "react";
import styles from "./About.module.css";
import UjjwalImage from "./../../Assets/images/ujjwal.png";
import { BsStars } from "react-icons/bs";
import { IoSparklesOutline } from "react-icons/io5";
import { useIntersectionObserver, animateOnVisible } from "./../../Pages/utils";
import animations from "./../../Pages/animations.module.css";

const About = () => {
  const descriptionRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const isDescriptionVisible = useIntersectionObserver(descriptionRef, {
    threshold: 0.5,
  });
  const isNameVisible = useIntersectionObserver(nameRef, {
    threshold: 0.5,
  });
  const isEducationVisible = useIntersectionObserver(educationRef, {
    threshold: 0.5,
  });
  const isEmailVisible = useIntersectionObserver(emailRef, {
    threshold: 0.5,
  });
  const isPhoneVisible = useIntersectionObserver(phoneRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    animateOnVisible(
      descriptionRef,
      isDescriptionVisible,
      animations.animate_left
    );
  }, [isDescriptionVisible]);

  useEffect(() => {
    animateOnVisible(nameRef, isNameVisible, animations.animate_left);
  }, [isNameVisible]);

  useEffect(() => {
    animateOnVisible(educationRef, isEducationVisible, animations.animate_left);
  }, [isEducationVisible]);

  useEffect(() => {
    animateOnVisible(emailRef, isEmailVisible, animations.animate_left);
  }, [isEmailVisible]);

  useEffect(() => {
    animateOnVisible(phoneRef, isPhoneVisible, animations.animate_left);
  }, [isPhoneVisible]);

  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <img src={UjjwalImage} alt="Ujjwal Jindal" />
            <BsStars className={styles.stars} />
            <IoSparklesOutline className={styles.stars} size={50} />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Who am I?</h2>
          <p ref={descriptionRef} className={styles.description}>
            I am a <span>creative problem solver</span> and software engineer
            who thrives on innovation. I love learning, collaborating, and
            taking on challenges. Originally from Saharanpur, Uttar Pradesh,
            India, I <span>enjoy</span> <span>exploring</span> <span>new</span>{" "}
            <span>ideas</span> and creating meaningful experiences.
            <br />
            In my free time, I indulge in music and competitive programming. I
            am driven, creative, and passionate about <span>making</span>{" "}
            <span>a</span> <span>positive</span> <span>impact </span>
            through technology.
          </p>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <h2>Name</h2>
              <p ref={nameRef}>Ujjwal Jindal</p>
            </div>
            <div className={styles.info}>
              <h2>Education</h2>
              <p ref={educationRef}>
                B.Tech - Computer Science - IIT(ISM) Dhanbad{" "}
                <span>(In progress)</span>
              </p>
            </div>
            <div className={styles.info}>
              <h2>Email</h2>
              <p ref={emailRef}>jindalujjwal0720@gmail.com</p>
            </div>
            <div className={styles.info}>
              <h2>Phone</h2>
              <p ref={phoneRef}>+91 7906347915</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
