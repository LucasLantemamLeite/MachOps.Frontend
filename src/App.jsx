import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import "./GlobalStyle.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
