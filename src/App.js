import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Signup from "./ui/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
