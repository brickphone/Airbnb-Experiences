import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import katie from './public/images/katie-zaferes.png'
import wedding from './public/images/wedding-photography.png'

function App () {
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <Cards 
        img={katie}
        rating="5.0"
        amount="(6)"
        country="USA"
        description="Life lessons with Katie Zafares"
        price="From $136 "
      />
      <Cards 
        img={wedding}
        rating="5.0"
        amount="(30)"
        country="USA"
        description="Learn wedding photography"
        price="From $125"
      />
    </div>
  )
}

export default App;