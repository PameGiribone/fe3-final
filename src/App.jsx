import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import './index.css'
import { useDentistaState } from "./Context/Context";


function App() {
  const { state } = useDentistaState();  
  return (
    <>
    <div className={`${state.theme} container`}>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>	
        </Routes>
        <Footer/>       
      </div>
    </>
    
  );
}
export default App;
