import styles from "./About.module.css";
import profileImage from "../../assets/hero/plucafo2.png";

export const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h2 className={styles.about}>About Me</h2>
        <img src={profileImage} alt="Profile image" className={styles.image} />
        <p className={styles.about}>
          Hello! I'm Phil Lucafo, a dedicated developer passionate about solving
          problems and creating user-friendly digital experiences. Proficient in
          HTML, CSS, and JavaScript, I am dedicated to continuously expanding my
          skill set and staying current with industry trends. I enjoy turning
          complex challenges into intuitive, efficient, and visually appealing
          web applications.
          <br />
          <br />
          I thrive in both collaborative and independent work environments,
          always aiming to deliver high-quality, user-centric solutions. My
          enthusiasm for learning and innovation drives me to contribute to
          projects that push technological boundaries.
          <br />
          <br />
          Explore my portfolio to see my work, and connect with me for exciting
          opportunities and collaborations. I'm eager to bring my skills and
          creativity to your next project and make a significant impact in the
          tech world.
        </p>
      </div>
    </>
  );
};

export default About;
