import React, { useEffect } from "react";
import styles from "./Project.module.css";
import { SiGithub } from "react-icons/si";
import { ImBlogger } from "react-icons/im";
import { useIntersectionObserver, animateOnVisible } from "../../Pages/utils";
import animations from "../../Pages/animations.module.css";

const Project = ({ project, index, type }) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const [webImageIndex, setWebImageIndex] = React.useState(0); // used for type two (both web and mobile)
  const [mobileImageIndex, setMobileImageIndex] = React.useState(0); // used for type two(both web and mobile)
  const numberRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const subtitleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const linksRef = React.useRef(null);

  const isDescriptionVisible = useIntersectionObserver(descriptionRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    animateOnVisible(numberRef, isDescriptionVisible, animations.animate_left);
    animateOnVisible(titleRef, isDescriptionVisible, animations.animate_left);
    animateOnVisible(
      subtitleRef,
      isDescriptionVisible,
      animations.animate_left
    );
    animateOnVisible(
      descriptionRef,
      isDescriptionVisible,
      animations.animate_left
    );
    // animateOnVisible(linksRef, isDescriptionVisible, animations.animate_left);
  }, [isDescriptionVisible]);

  useEffect(() => {
    if (type === "mobile") {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    } else if (type === "both") {
      const intervalWeb = setInterval(() => {
        setWebImageIndex((prev) => (prev + 1) % project.webImages.length);
      }, 3000);
      const intervalMobile = setInterval(() => {
        setMobileImageIndex((prev) => (prev + 1) % project.mobileImages.length);
      }, 3000);
      return () => {
        clearInterval(intervalWeb);
        clearInterval(intervalMobile);
      };
    }
  }, [
    project.images?.length,
    project.mobileImages?.length,
    project.webImages?.length,
    type,
  ]);

  const getIcon = (platform) => {
    switch (platform) {
      case "github":
        return <SiGithub />;
      case "blog":
        return <ImBlogger />;
      case "demo":
        return "Demo";
      case "download":
        return "Download";
      default:
        return "";
    }
  };

  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <div className={styles.static}>
          <div className={styles.top}>
            <p ref={numberRef} className={styles.projectNumber}>
              0{index + 1}
            </p>
            <h2 ref={titleRef} className={styles.title}>
              {project.title}
            </h2>
            <h3 ref={subtitleRef} className={styles.subtitle}>
              {project.subtitle}
            </h3>
            <p ref={descriptionRef} className={styles.description}>
              {project.description}
            </p>
          </div>
          <div ref={linksRef} className={styles.bottom}>
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {getIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.dynamic}>
          {type === "mobile" ? (
            <>
              <div className={styles.imageContainer}>
                <img src={project.images[imageIndex]} alt={project.title} />
              </div>
              <div className={styles.imageContainer + " " + styles.asideImage}>
                <img
                  src={project.images[(imageIndex + 1) % project.images.length]}
                  alt={project.title}
                />
              </div>
            </>
          ) : (
            type === "both" && (
              <>
                <div className={styles.webImageContainer}>
                  <img
                    src={project.webImages[webImageIndex]}
                    alt={project.title}
                  />
                </div>
                <div
                  className={styles.imageContainer + " " + styles.asideImage}
                >
                  <img
                    src={project.mobileImages[mobileImageIndex]}
                    alt={project.title}
                  />
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
