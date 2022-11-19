import "./App.css";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";

function App() {
  return (
    <div className="App">
      <div id="calculator">
        <Screen value={0}/>
        <ButtonsPad />
      </div>
    </div>
  );
}

export default App;
