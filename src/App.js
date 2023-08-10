import "./App.css";
import Art from "./Art";
import Title from "./Title";
import Loading from "./Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Like from "./Like";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/" element={<Art />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
