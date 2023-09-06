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
import Intermediate from "./components/grammer/intermediate"
import UpperIntermediate from "./components/grammer/upper-intermediate"
import PreAdvenced from "./components/grammer/pre-advenced"
import LisElementry from "./components/listening/elementry"
import LisPreIntermediate from "./components/listening/pre-intermediate"
import LisIntermediate from "./components/listening/intermediate"
import LisUpperIntermediate from "./components/listening/upper-intermediate"
import LisPreAdvenced from "./components/listening/pre-advenced"
import RidElementry from "./components/reading/elementry"
import RidPreIntermediate from "./components/reading/pre-intermediate"
import RidIntermediate from "./components/reading/intermediate"
import RidUpperIntermediate from "./components/reading/upper-intermediate"
import RidPreAdvenced from "./components/reading/pre-advenced"
import UsElementry from './components/useofenglish/elementry'
import UsPreIntermediate from './components/useofenglish/pre-intermediate'
import UsIntermediate from './components/useofenglish/intermediate'
import UsUpperIntermediate from './components/useofenglish/upper-intermediate'
import UsPreAdvenced from './components/useofenglish/pre-advenced'
import WrElementry from './components/writing/elementry'
import WrPreIntermediate from "./components/writing/pre-intermediate"
import WrIntermediate from "./components/writing/intermediate"
import WrUpperIntermediate from "./components/writing/upper-intermediate"
import WrPreAdvenced from "./components/writing/pre-advenced"
import ExmElementry from './components/exams/elementry'
import ExmPreIntermediate from './components/exams/pre-intermediate'
import ExmIntermediate from './components/exams/intermediate'
import ExmUpperIntermediate from './components/exams/upper-intermediate'
import ExmPreAdvenced from './components/exams/pre-advenced'
import ToBe from "./components/grammer-topics/to-be"
import ThisThatThose from "./components/grammer-topics/this"
import PossiveAdjactives from "./components/grammer-topics/possive-adjactives"
import Plurals from "./components/grammer-topics/a-an"

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
        <Route path="/grammer/b1" element={<Intermediate />} />
        <Route path="/grammer/b1+" element={<UpperIntermediate />} />
        <Route path="/grammer/b2" element={<PreAdvenced />} />
        <Route path="/listening/a1" element={<LisElementry />} />
        <Route path="/listening/a2" element={<LisPreIntermediate />} />
        <Route path="/listening/b1" element={<LisIntermediate />} />
        <Route path="/listening/b1+" element={<LisUpperIntermediate />} />
        <Route path="/listening/b2" element={<LisPreAdvenced />} />
        <Route path="/reading/a1" element={<RidElementry />} />
        <Route path="/reading/a2" element={<RidPreIntermediate />} />
        <Route path="/reading/b1" element={<RidIntermediate />} />
        <Route path="/reading/b1+" element={<RidUpperIntermediate />} />
        <Route path="/reading/b2" element={<RidPreAdvenced />} />
        <Route path="/useofenglish/a1" element={<UsElementry />} />
        <Route path="/useofenglish/a2" element={<UsPreIntermediate />} />
        <Route path="/useofenglish/b1" element={<UsIntermediate />} />
        <Route path="/useofenglish/b1+" element={<UsUpperIntermediate />} />
        <Route path="/useofenglish/b2" element={<UsPreAdvenced />} />
        <Route path="/writing/a1" element={<WrElementry />} /> 
        <Route path="/writing/a2" element={<WrPreIntermediate />} /> 
        <Route path="/writing/b1" element={<WrIntermediate />} /> 
        <Route path="/writing/b1+" element={<WrUpperIntermediate />} /> 
        <Route path="/writing/b2" element={<WrPreAdvenced />} /> 
        <Route path="/exams/a2" element={<ExmElementry />} />
        <Route path="/exams/b1" element={<ExmPreIntermediate />} />
        <Route path="/exams/b2" element={<ExmIntermediate />} />
        <Route path="/exams/ielts" element={<ExmUpperIntermediate />} />
        <Route path="/exams/toefl-ibt" element={<ExmPreAdvenced />} />
        <Route path="/grammer/a1/to-be" element={<ToBe />} />
        <Route path="/grammer/a1/this-that-these-those" element={<ThisThatThose />} />
        <Route path="/grammer/a1/possive-adjactives" element={<PossiveAdjactives />} />
        <Route path="/grammer/a1/a-an-plurals" element={<Plurals />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
