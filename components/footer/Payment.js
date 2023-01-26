import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/payment/visa.png" alt="" />
        <img src="../../../images/payment/mastercard.png" alt="" />
        <img src="../../../images/payment/paypal.png" alt="" />
      </div>
    </div>
  );
}
