import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutItem } from "./pages/AboutItem"; 

import { NotFound } from "./pages/NotFound";
 const App = () => {
 

  return (
    <div className="p-4">
      <header>
      <h1>Titulo do site </h1>
      </header>
    
      <hr />
      <div className="py-4">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sobre" element={<About />} />
          <Route path="/sobre/:slug" element={<AboutItem />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <hr />

      <footer>
      Todos os direitos reservados
      </footer>
       
      
    </div>
  );
}

export default App
