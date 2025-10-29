
import Greet, { TypeEfferct } from './components/Greet'
import Counter,{ ClickButton } from './components/Counter';
import Mouse ,{AutoHideNotification,CounterReset}from './components/Mouse'
import CharacterCounter, { ButtonClick,HoverBox } from './components/CharCounter';
import Toggletheme from './components/Toggle';
import FromValidation from './components/From';
import {BrowserRouter,Route,Routes,Link} from "react-router"


function App(){
  return(
    <>
    <BrowserRouter>
     <Link to="/Greet">Greet</Link>
     <br></br>
     <Link to="/TypeEfferct">TypeEffect</Link>
         <br></br>
    <Link to="/ClickButton ">ClickButton </Link>
        <br></br>
    <Link to=" Counter">Counter</Link>
        <br></br>
    {/* <Link to=" CounterReset">CounterReset</Link>
        <br></br> */}
    {/* <Link to=" AutoHideNotification">AutoHideNotification</Link>
        <br></br> */}
    {/* <Link to=" Mouse"> Mouse</Link>
        <br></br> */}
    <Link to="HoverBox ">HoverBox</Link>
        <br></br>
    <Link to="/ButtonClick ">ButtonClick</Link>
        <br></br>
    {/* <Link to=" /characterCounter">characterCounter</Link>
        <br></br> */}
    <Link to="toggleTheme ">toggleTheme</Link>
        <br></br>
    <Link to="/fromValidation ">fromValidation </Link>
    
    <Routes>
      <Route path="/fromValidation" element={<FromValidation/>} />
      <Route path='/toggleTheme' element={<Toggletheme/>}/ >
     <Route path='/characterCounter' element={<CharacterCounter/>}/>
     <Route path="/ButtonClick" element={<ButtonClick/>} />
      <Route path="/HoverBox" element={<HoverBox/>} />
       <Route path="/Mouse" element={<Mouse/>} />
        <Route path="/AutoHideNotification" element={<AutoHideNotification/>} />
         <Route path="/CounterReset" element={<CounterReset/>} />
          <Route path="/Counter" element={<Counter/>} />
           <Route path="/ClickButton " element={<ClickButton />} />
            <Route path="/Greet" element={<Greet/>} />
             <Route path="/TypeEfferct" element={<TypeEfferct/>} />
             
    </Routes>
    </BrowserRouter>
   
    </>
  )
}
    
   
{/* //  <>
//   <Counter/>
//   <ClickButton/>
//   <Greet name='JOJO'/>
//   <Mouse/>
//   <AutoHideNotification/>
//   <CounterReset/>
//   <ButtonClick/>
//   <CharacterCounter/>
//   <HoverBox/>
//   <Toggletheme/>
//   <TypeEfferct/>
//   <FromValidation/>
//   </>
//   ) */}


export default App;





