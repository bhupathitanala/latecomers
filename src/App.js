import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Tracklatecomers from './Components/Tracklatecomers';
function App() {
  return (
   <>
   <BrowserRouter>
   <div class="sb-nav-fixed">
       
        <Topbar/>
        <div id="layoutSidenav">

          <Sidebar/>
     

         <Routes>
         <Route path="/" element={<Dashboard/>}/>
         <Route path='tracklatecomers' element={<Tracklatecomers/>}/>

         </Routes>
          



      </div>
  
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
