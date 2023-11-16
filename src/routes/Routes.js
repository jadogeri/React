import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from '../pages/Home/Home'
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword"
import ResetPassword from "../pages/ResetPassword/ResetPassword"
import Contact from "../pages/Contact/Contact"
import About from "../pages/About/About"
import SignIn from "../pages/SignIn/SignIn";
import NoPage from "../pages/NoPage/NoPage";


const routes = () => {
return <BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="/resetpassword" element={<ResetPassword/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/forgotpassword" element={<ForgotPassword/>}/>
  <Route path="*" element={<NoPage/>}/>

</Routes>
</BrowserRouter>

}

export default routes;