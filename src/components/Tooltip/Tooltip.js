import styles from "./Tooltip.module.css";

const Tooltip = ({ children }) => {
  return (
    <div className={styles["tooltip"]}>
      <small>{children}</small>
    </div>
  );
};

export default Tooltip;
