import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import katie from './public/images/katie-zaferes.png'
import wedding from './public/images/wedding-photography.png'
import bike from './public/images/mountain-biking.png'

function App () {
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <Cards 
        id="1"
        img={katie}
        rating="5.0"
        amount="(6)"
        country="USA"
        description="Life lessons with Katie Zafares"
        price="From $136 "
      />
      <Cards
        id="2" 
        img={wedding}
        rating="5.0"
        amount="(30)"
        country="USA"
        description="Learn wedding photography"
        price="From $125"
      />
      <Cards 
        id="3"
        img={bike}
        rating="4.8"
        amount="(2)"
        description="Group Mountain Biking"
        price="From $50"
      />
    </div>
  )
}

export default App;