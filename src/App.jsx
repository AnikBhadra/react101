import Style from "../Components/Style";
import "./App.css";
import styles from "./myStyles.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Style bg="bigred" />
        <p className={styles.error}>
          Using styles defined in parent container css
        </p>
      </header>
    </div>
  );
}

export default App;
