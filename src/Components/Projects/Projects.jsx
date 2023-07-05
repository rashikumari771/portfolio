import React from "react";
import styles from "./Project.module.css";
import ProjectImage11 from "../../Assets/images/project11.png";
import ProjectImage12 from "../../Assets/images/project12.png";
import ProjectImage13 from "../../Assets/images/project13.png";
import ProjectImage14 from "../../Assets/images/project14.png";
import ProjectImage21 from "../../Assets/images/project21.png";
import ProjectImage22 from "../../Assets/images/project22.png";
import ProjectImage23 from "../../Assets/images/project23.png";
import ProjectImage24 from "../../Assets/images/project24.png";
import ProjectImage31w from "../../Assets/images/project31w.png";
import ProjectImage32w from "../../Assets/images/project32w.png";
import ProjectImage33w from "../../Assets/images/project33w.png";
import ProjectImage31m from "../../Assets/images/project31m.png";
import ProjectImage32m from "../../Assets/images/project32m.png";
import ProjectImage33m from "../../Assets/images/project33m.png";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "Alphastair",
      subtitle: "Full Stack Web Application",
      description: `A web based game that is fun to play and also helps you learn
      vocabulary. The game is based on the popular game Word Ladder.`,
      images: [ProjectImage11, ProjectImage12, ProjectImage13, ProjectImage14],
      links: [
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/staircase-client",
        },
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/staircase-server",
        },
        {
          platform: "blog",
          url: "https://longpost.netlify.app/post/64874aff76436952f5e4d985",
        },
        {
          platform: "demo",
          url: "https://alphastair.netlify.app/",
        },
      ],
      type: "mobile",
    },
    {
      title: "CFBuddy",
      subtitle: "Flutter Mobile Application",
      description: `A mobile application that helps you find the best insights for
      your coding journey on codeforces.com.`,
      images: [ProjectImage21, ProjectImage22, ProjectImage23, ProjectImage24],
      links: [
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/cfbuddy",
        },
        {
          platform: "blog",
          url: "https://longpost.netlify.app/post/6487e91d3b5a8a924623a2be",
        },
        {
          platform: "download",
          url: "https://drive.google.com/file/d/1tU8z9e_CY220zgK964vI5mRqHhrDYk0b/view?usp=sharing",
        },
      ],
      type: "mobile",
    },
    {
      title: "MedOI",
      subtitle: "Web and Mobile Application",
      description: `A web and mobile application that helps you manage your
      all doctor appointments and prescriptions digitally. (Team Project)`,
      webImages: [ProjectImage31w, ProjectImage32w, ProjectImage33w],
      mobileImages: [ProjectImage31m, ProjectImage32m, ProjectImage33m],
      links: [
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/gfghackathon",
        },
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/gfghackathon_app",
        },
        {
          platform: "blog",
          url: "https://longpost.netlify.app/post/6487ddd139cf06a3a412f7b1",
        },
      ],
      type: "both",
    },
  ];

  return (
    <div className={styles.projects} id="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
          type={project.type}
        />
      ))}
    </div>
  );
};

export default Projects;
