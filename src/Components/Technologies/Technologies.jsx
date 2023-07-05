import React from "react";
import styles from "./Technologies.module.css";
import HTMLImage from "./../../Assets/images/html-white.png";
import ReactImage from "./../../Assets/images/react-white.png";
import FlutterImage from "./../../Assets/images/flutter-white.png";
import JSImage from "./../../Assets/images/js-white.png";
import NodeImage from "./../../Assets/images/node-white.png";
import MongoImage from "./../../Assets/images/mongo-white.png";
import GitImage from "./../../Assets/images/git-white.png";
import CSSImage from "./../../Assets/images/css-white.png";
import ExpressImage from "./../../Assets/images/express-white.png";
import GraphQLImage from "./../../Assets/images/graphql-white.png";
import PostmanImage from "./../../Assets/images/postman-white.png";
import FirebaseImage from "./../../Assets/images/firebase-white.png";
import CppImage from "./../../Assets/images/cpp-white.png";

const Technologies = () => {
  const logos = [
    {
      src: HTMLImage,
      alt: "HTML",
    },
    {
      src: JSImage,
      alt: "JS",
    },
    {
      src: ReactImage,
      alt: "React",
    },
    {
      src: FlutterImage,
      alt: "Flutter",
    },
    {
      src: NodeImage,
      alt: "Node",
    },
    {
      src: CppImage,
      alt: "C++",
    },
    {
      src: GraphQLImage,
      alt: "GraphQL",
    },
    {
      src: MongoImage,
      alt: "Mongo",
    },
    {
      src: GitImage,
      alt: "Git",
    },
    {
      src: CSSImage,
      alt: "CSS",
    },
    {
      src: ExpressImage,
      alt: "Express",
    },
    {
      src: PostmanImage,
      alt: "Postman",
    },
    {
      src: FirebaseImage,
      alt: "Firebase",
    },
  ];

  return (
    <div className={styles.technologies}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>I have worked with</h2>
        </div>
        <div className={styles.techMarquee} behavior="scroll" direction="left">
          {logos.map((logo, index) => (
            <div className={styles.techlogo} key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
