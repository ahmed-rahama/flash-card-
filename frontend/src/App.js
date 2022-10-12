
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import FlashcardCreate from './components/FlashcardCreate';
import {Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import './styles/NavbarStyling.css';

import { ToastContainer} from "react-toastify"
import Profile from "./components/Profile"
import ContactForm from './components/ContactForm';



function App() {

  
  
  return (
    <div >



 <Routes>
  
  <Route path= "/" element= {<Home/>}/>
  <Route path="/signup" element= {<RegisterForm />}/>
  <Route path="/flashcardcreateNL" element= {<FlashcardCreate />}/>
  <Route path= "/login"  element= {<LoginForm />}/>
  <Route path= "/profile" element= {<Profile />}/>
  <Route path= "/contact" element= {<ContactForm />}/>

 </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
