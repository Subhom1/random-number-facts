import styles from "./Loading.module.scss";
export default () => (
  <div id={styles.wave}>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
  </div>
);
