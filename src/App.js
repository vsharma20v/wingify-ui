import styles from "./App.module.css";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <main className={styles["main-container"]}>
      <Signup />
    </main>
  );
}

export default App;
