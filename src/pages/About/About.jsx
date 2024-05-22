import styles from "./About.module.css";
import profileImage from '../../assets/hero/plucafo2.png';

export const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h2 className={styles.about}>About Me</h2>
        <img
          src={profileImage}
          alt="Profile image"
          className={styles.image}
        />
        <p className={styles.about}>
        Hello! I'm Phil Lucafo, a dedicated junior developer with a fervent passion for problem-solving and crafting user-friendly digital experiences. With a solid foundation in HTML, CSS, and JavaScript, I continually strive to expand my skill set and stay updated with the latest industry trends. My journey in web development has been driven by a love for creating intuitive, efficient, and visually appealing web applications that make a difference.
<br />
<br />
I take pride in my ability to tackle complex challenges head-on and transform innovative ideas into functional, user-centric solutions. Whether it's collaborating with a dynamic team or working independently, my goal is to deliver high-quality work that exceeds expectations. My enthusiasm for learning and growth fuels my desire to contribute to cutting-edge projects that push the boundaries of technology.
<br />
<br />
Let's build something amazing together! Explore my portfolio to see the projects I've worked on, and feel free to connect with me for exciting opportunities and collaborations. I'm excited to bring my skills and creativity to your next project and make a meaningful impact in the tech world.
        </p>
      </div>
    </>
  );
};

export default About;
