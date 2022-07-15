import { useState } from "react";
import "./App.css";
import CountByFIve from "./components/CountByFive/CountByFIve";
import Counter from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";

function App() {
  const [counterApp, setCounterApp] = useState(false);
  const [countByFiveApp, setCountByFiveApp] = useState(false);
  const [todosApp, setTodosApp] = useState(false);

  const handleCounterAppShow = () => {
    setCounterApp(!counterApp);
  };
  const handleCountByFiveAppShow = () => {
    setCountByFiveApp(!countByFiveApp);
  };
  const handleTodosAppShow = () => {
    setTodosApp(!todosApp);
  };
  return (
    <div className="App">
      <h1>Welcome to my practicing project</h1>
      <button type="button" onClick={handleCounterAppShow}>
        Toggle Counter App
      </button>
      <button type="button" onClick={handleCountByFiveAppShow}>
        Toggle Count By Five App
      </button>
      <button type="button" onClick={handleTodosAppShow}>
        Toggle Todos App
      </button>
      {counterApp && <Counter />}
      {countByFiveApp && <CountByFIve />}
      {todosApp && <Todos />}
    </div>
  );
}

export default App;
