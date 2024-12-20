import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Company from './components/Companies/Company'
import Residence from './components/Residence/Residence'
function App() {


  return (
   <>
   <div className="app">
    <div className="">
      <div className="white-gradient"/>
          <Header />
          <Hero />
    </div>
    <Company/>
    <Residence/>

   </div>
 
   </>
  )
}

export default App
