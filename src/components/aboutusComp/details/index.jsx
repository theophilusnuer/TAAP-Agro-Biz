import abigail from "../../../assets/abigail.jpg";
import anisa from "../../../assets/anisa.jpg";
import ella from "../../../assets/ella.jpg";
import theo from "../../../assets/theo.jpg";
import styles from "./index.module.css";
import image from "../../../assets/slider2.jpg";

const About = () => {
    return (
        <div className={styles.heading}>
            <section>
                <img className={styles.back} src={image} alt="background" />
            </section>
            <h3 className={styles.intro}>
                Welcome to AgroBiz - Your trusted source of quality and affordable agro
                products
            </h3>
            <h4>Our Story</h4>
            <p className={styles.info}>
                At AgroBiz, we believe in the power of nature. Our journey began when a
                group of passionate farmers and like-minded individuals came together
                with a shared vision: to revolutionize the way people access fresh,
                organic produce and agro products. We wanted to bridge the gap between
                farmers and consumers, creating a seamless platform where quality meets
                convenience and the vast needs of consumers are met without hussle and
                tussle.
            </p>
            <h4>What We Offer</h4>
            <p className={styles.info}>
                Our marketplace showcases an array of agro products from handpicked,
                organic fruits and vegetables to viable seeds that blossom into fruitful
                trees. We partner directly with local farmers, ensuring fair prices and
                sustainable practices. Every purchase you make supports small-scale
                agriculture and promotes biodiversity. With our up-to-date logistics
                network, your farm-fresh bounty arrives at your doorstep within hours.
                Say goodbye to long supermarket queues and hello to hassle-free
                shopping. AgroBiz isn&#39;t just a business; it&#39;s a movement. We
                organize workshops, webinars, and farm tours to educate consumers about
                sustainable farming practices.
            </p>
            <h4>Vision</h4>
            <p className={styles.info}>
                To be a resourceful, reliable and dependent marketplace that makes
                shopping easy, promotes environmental sustainabilty and prides itself by
                its core values
            </p>
            <h4>Mission</h4>
            <p className={styles.info}>
                Our biggest mission is to bring the best value of agricultural products
                to the world. As import becomes increasingly vital in agro business, we
                aim to introduce Vietnamese high-quality agriculture products to global
                importers at the most reasonable price. We are committed to enhancing
                the value of Vietnamese agricultural products, supporting local farmers,
                and fostering a sustainable future.”
            </p>
            <h4>Meet Our Team</h4>
            <div className={styles.team}>
                <div>
                    <img
                        className={styles.teamimage}
                        src={abigail}
                        alt="Abigail Oppong"
                    />
                    <h5>Ms. Abigail Oppong</h5>
                    <h6>Chief Cultivator &#38; Agronomist</h6>
                    <p>
                        Abigail&#39;s love for soil and seeds drives our mission to be
                        productive, efficient and dynamic.
                    </p>
                </div>
                <div>
                    <img className={styles.teamimage} src={theo} alt="Theophilus Nuer" />
                    <h5>Mr. Theophilus Nuer</h5>
                    <h6>CEO of AgroBiz</h6>
                    <p>
                        Oversees the daily operations of AgroBiz and allocates resources.
                    </p>
                </div>
                <div>
                    <img className={styles.teamimage} src={anisa} alt="Anisa Danso" />
                    <h5>Ms. Anisa Danso</h5>
                    <h6>Co-founder &#38; Enviroment Enthusiast</h6>
                    <p>
                        From ensuring proper environmental practises are employed to
                        promoting long-term sustainable environmental practises,we are happy
                        she is a part of our team
                    </p>
                </div>
                <div>
                    <img
                        className={styles.teamimage}
                        src={ella}
                        alt="Priscilla Paulina"
                    />
                    <h5>Ms. Priscilla Paulina</h5>
                    <h6>IT Specialist &#38; Data Analyst</h6>
                    <p>
                        Priscilla ensures our website is updated and functioning at all
                        times thereby providing our customers with a rich shopping
                        experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
