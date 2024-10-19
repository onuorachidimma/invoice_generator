import { Routes, Route } from "react-router-dom";
import Example from "./components/navbar";
import './App.css'

const App = () =>  {

  return (
    <>
      <Routes>
      <Route path="/" element={<Example />} />
      </Routes>
    </>
  )
}

export default App
