import HomePage from "./components/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Grammar from "./components/grammar"
import Listening from "./components/listening"
import Reading from "./components/reading"
import UseOfEnglish from "./components/useofenglish"
import Writing from "./components/writing"
import Exams from "./components/exams"
import Elementry from "./components/grammer/elementry"
import PreIntermediate from "./components/grammer/pre-intermediate"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grammer" element={<Grammar/>} />
        <Route path="/listening" element={<Listening/>} />
        <Route path="/reading" element={<Reading/>} />
        <Route path="/useofenglish" element={<UseOfEnglish/>} />
        <Route path="/writing" element={<Writing/>} />
        <Route path="/exams" element={<Exams/>} />
        <Route path="/grammer/a1" element={<Elementry />} />
        <Route path="/grammer/a2" element={<PreIntermediate />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
