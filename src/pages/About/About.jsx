import styles from "./About.module.css";


export const About = () => {

    return (
        <>
        <div className={styles.about}>
        <h2 className={styles.about}>About Me</h2>
        <img src="../../assets/hero/plucafo2.png" alt="Profile image" className={styles.image} />
            <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus possimus tempora tempore voluptatibus quod suscipit rem, harum dignissimos perspiciatis fugiat consequatur vitae deleniti adipisci explicabo asperiores modi cumque ab itaque iure blanditiis placeat officia corrupti architecto! Vitae, quod placeat? Iste nulla sint dolorem optio praesentium, vel aliquid sunt, fuga dolore, ab repudiandae minus nostrum. Molestiae rerum officiis consequatur, voluptatem pariatur quae maiores ad incidunt ab quasi eius deserunt quidem esse ipsam, sunt eaque illo, ullam cum rem iure! Placeat ipsa repellat delectus aliquam, cumque aliquid alias, quae esse ut obcaecati vel reiciendis sint laboriosam atque impedit aspernatur totam, hic exercitationem.</p>
        </div>
        </>
    );
}

export default About;