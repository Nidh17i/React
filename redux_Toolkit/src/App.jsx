import { UserDetail } from "./components/ums/pages/Details";
import { Home } from "./components/ums/pages/Home";
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
           <Route path="/edit" element={<UMS/>}/>

        </Routes>
      
      </BrowserRouter>
     
    </>
  );
}

export default App;
