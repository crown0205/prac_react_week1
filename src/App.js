import "./App.css";
import { Route } from "react-router-dom";
import Main from "./Main"

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
    </div>
  );
}

export default App;
