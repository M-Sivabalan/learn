import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    

    <Route index element={<Home />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
