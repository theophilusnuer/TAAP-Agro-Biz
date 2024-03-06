import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import Carousel from "react-bootstrap/Carousel";
import styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import SellingPage from "../../../pages/sellingPage";

function Hero() {
  return (
    <section>
      <Carousel pause="false" className={styles.heroBox}>
        <Carousel.Item className={styles.imageContainer} interval={5000}>
          <img src={slider1} className={styles.imageSizer} alt="" />
          <Carousel.Caption className={styles.captionBox}>
            <h2 className={styles.headLine}>Quality Agriculture Products</h2>
            <p className={styles.welcomeToAgro}>
              Welcome to AgroBiz. We believe in promoting sustainable
              agriculture
            </p>
            <div className={styles.button}>
              <Button className={styles.callToAction}>Buy Here</Button>
              <Button onClick={SellingPage} className={styles.callToAction}>Sell Here</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.imageContainer} interval={5000}>
          <img src={slider2} className={styles.imageSizer} alt="" />
          <Carousel.Caption className={styles.captionBox}>
            <h2 className={styles.headLine}>Quality Agriculture Products</h2>
            <h4 className={styles.welcomeToAgro}>
              Welcome to AgroBiz. We believe in better Agriculture for better
              future
            </h4>
            <div className={styles.button}>
              <Button className={styles.callToAction}>Buy Here</Button>
              <Button className={styles.callToAction}>Sell Here</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.imageContainer} interval={5000}>
          <img src={slider3} className={styles.imageSizer} alt="" />
          <Carousel.Caption className={styles.captionBox}>
            <h2 className={styles.headLine}>Quality Agriculture Products</h2>
            <h4 className={styles.welcomeToAgro}>
              Welcome to AgroBiz. We believe in better Agriculture for better
              future
            </h4>
            <div className={styles.button}>
              <Button className={styles.callToAction}>Buy</Button>
              <Button className={styles.callToAction}>Sell Here</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
