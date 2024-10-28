import './App.css'
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from './pages/signIn';
const App = () =>  {

  return (
    <>
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
