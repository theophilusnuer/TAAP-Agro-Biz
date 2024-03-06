import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../../assets/logo.png";
import styles from "./index.module.css"


export default function Footer() {
  return (
    <div className={styles.foot} id="footer">
      <div className={styles.display}>
        <div>
          <img className={styles.logo} src={logo} alt="AgroBiz" />
          <div className={styles.icon}>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
          </div>
        </div>
        <div>
          <h5 className={styles.link}>Links</h5>
          <ul className={styles.list}>
            <li>
            <a className={styles.footerlinks} href={`/`}>Home</a>
            </li>
            <li>
            <a className={styles.footerlinks} href={`/`}>Market Place</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footerlinks}>About us</h5>
          <ul className={styles.list}>
            <li>Our Story</li>
            <li>Mission</li>
            <li>Vision</li>
          </ul>
        </div>
        <div>
          <h5 className={styles.footerlinks}>Contact</h5>
          <ul className={styles.list}>
            <li className={styles.info}>
              <LocationOnIcon></LocationOnIcon>
              Mest Africa, East Legon <br /> 19 Aluguntugui Street
            </li>

            <li className={styles.info}>
              <PhoneIcon></PhoneIcon>
              +233 590453789/+233 507652435
            </li>

            <li className={styles.info}>
              <EmailIcon></EmailIcon>
              info@agrobiz.com
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>Copyright &#169; Agrobiz Inc. @ 2024</div>
    </div>
  );
}
