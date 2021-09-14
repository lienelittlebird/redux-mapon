import Counter from "./components/Counter/Counter";
import FloatingCounter from "./components/FloatingCounter/FloatingCounter";

import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>React-Redux app</h1>
      <Counter />
      <FloatingCounter />
    </div>
  );
};

export default App;
