import RefComponent from "./RefComponent";
import ReducerComponent from "./ReducerComponent";
import Parent from "./ComponentsWithUseContext/Parent";
import './App.css';

const App = () => {

  return (
    <div>
      <RefComponent />
      <ReducerComponent />
      <Parent />
    </div>
  );
};

export default App;

