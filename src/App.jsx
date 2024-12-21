import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Company from './components/Companies/Company'
import Residence from './components/Residence/Residence'
import Value from './components/Value/Value'
function App() {


  return (
   <>
   <div className="app">
    <div>
      <div className="white-gradient"/>
          <Header />
          <Hero />
    </div>
    <Company/>
    <Residence/>
    <Value/>

   </div>
 
   </>
  )
}

export default App
