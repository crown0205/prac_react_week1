import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Review from "./Review";

function App() {
  return (
    <div className="App">
      <WrapStyle>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/review/:day" exact>
          <Review />
        </Route>
      </WrapStyle>
    </div>
  );
}

const WrapStyle = styled.div`
  background-color: white;
  max-width: 350px;
  min-height: 300px;
  margin: 80px auto 0;
  padding: 10px 20px;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  /* Main */
  h1 {
    margin-bottom: 10px;
  }
  hr {
    margin-bottom: 20px;
  }

  /* Review */
  span {
    background: #7bcbff;
    color: #fff;
    padding: 6px 6px;
    border-radius: 10px;
    letter-spacing: 2px;
  }
`;
export default App;
