import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/product" element={<Dashboard />}></Route>
        <Route exact path="/cart" element={<CartDetail />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
