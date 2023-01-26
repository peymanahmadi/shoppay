import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from "react-icons/bs";
import styles from "./styles.module.scss";

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="/" target="_blank"></a>
            <FaFacebookF />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <BsInstagram />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <BsTwitter />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <BsYoutube />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <BsPinterest />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <BsSnapchat />
          </li>
          <li>
            <a href="/" target="_blank"></a>
            <FaTiktok />
          </li>
        </ul>
      </section>
    </div>
  );
}
