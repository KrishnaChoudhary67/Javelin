import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Electronics from "./Electronics";
import MenClothing from "./MenClothing";
import WomenClothing from "./WomenClothing";
import Jewelery from "./Jewelery";
import Item from "./Item";


function App() {
  return (
    <div >
<BrowserRouter>
<Navbar>
 
</Navbar>
<Routes>
    <Route path="/" element={<Home></Home>}></Route>
<Route path="/jewelery"element={<Jewelery></Jewelery>}></Route>
  <Route path="/electronics" element={<Electronics></Electronics>}></Route>
    <Route path="/menClothing" element={<MenClothing></MenClothing>}></Route>
    <Route path="/womenClothing" element={<WomenClothing></WomenClothing>}></Route>
    <Route path="/item" element={<Item></Item>}></Route>

  </Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
