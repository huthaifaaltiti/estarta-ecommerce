// component
import { BeatLoader } from "react-spinners";

// styles
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <BeatLoader color="#537fe7" className={styles.spinner}/>
    </div>
  );
}
