import styles from "./Signup.module.css";
import Form from "../Form/Form";

const Signup = () => {
  return (
    <section className={styles["signup-container"]}>
      <div className={styles["signup-sidebar-container"]}>
        <h1 className={styles["sidebar-heading"]}>Sample heading</h1>
        <p className={styles["sidebar-content"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          distinctio incidunt quae voluptas tempore dolorem, autem officia
          libero soluta.
        </p>
      </div>
      <Form />
    </section>
  );
};

export default Signup;
