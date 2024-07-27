import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.scss';
import Details from "./views/Details";
import Home from "./views/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
