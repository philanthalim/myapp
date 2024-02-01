import './App.css';
import {Box} from "@mui/material";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import {Navbar} from "./components/navigation";
import {Footer} from "./components/footer"

function App() {
  return (
    <Box>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
        {/* <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} /> */}
      </Routes>
      <Footer/>
    </Router>
    </Box>
  );
}

export default App;
