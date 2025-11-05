import { UserDetail } from "./components/ums/pages/Details";
import { Home } from "./components/ums/pages/Home";
import { Updated } from "./components/ums/pages/Updated";
import { UMS } from "./components/ums/UMS";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<UMS />} />
           <Route path='/UMSUser/:id' element={<UserDetail/>}/>  
           <Route path="/edit/:id" element={<Updated/>}/>

        </Routes>
      
      </BrowserRouter>
     
    </>
  );
}

export default App;