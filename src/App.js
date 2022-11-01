import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Watch from "./Component/Watch/Watch";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/watch/:id' element={<Watch />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
