import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import data from './components/data'

function App () {
  const Cards = data.map(item => {

  })

  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      {Cards}
    </div>
  )
}

export default App;