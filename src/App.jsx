import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'

function App () {
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <Cards 
        img="../public/Images/katie-zaferes.png"
        rating=""
      />
    </div>
  )
}

export default App;