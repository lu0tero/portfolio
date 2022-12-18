/* React */
import { Route, Routes } from 'react-router-dom'

/* Components */
import Home from './Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

/* Cs*/
import './App.css'

function App() {

  return (

    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
