import Counter from "./components/Counter/Counter";
import FloatingCounter from "./components/FloatingCounter/FloatingCounter";
import FruitChange from "./components/FruitChange/FruitChange";

import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>React-Redux app</h1>
      <Counter />
      <FloatingCounter />
      <FruitChange />
    </div>
  );
};

export default App;
