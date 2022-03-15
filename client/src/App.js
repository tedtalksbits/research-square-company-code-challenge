import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Post } from "./pages/Post";
import { Home } from "./pages/Home";
import Nav from "./components/Nav";

function App() {
   return (
      <div className="app">
         <Router>
            <Nav />
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/admin" element={<Admin />} />
               <Route path="/post" element={<Post />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
