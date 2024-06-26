import styles from "./Resume.module.css";
import resumePdf from "../../assets/contact/resume.pdf";

export const Resume = () => {

    return (
        <>
        <div className={styles.resume}>
        <h1>Resume</h1>
        <a href={resumePdf} download="Phil_Lucafo_Resume.pdf" className={styles.downloadLink}> Download my Resume</a>
        <h2>Front-end Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        </div>
        <div className={styles.resume}>
        <h2>Back-end Proficiencies</h2>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL / Sequelize</li>
            <li>MongoDB / Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
        </div>
        </>
    );
}

export default Resume;