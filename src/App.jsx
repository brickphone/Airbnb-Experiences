/* eslint-disable react/jsx-key */
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import data from './components/data'

function App () {
  const cardsList = data.map(item => {
    return (
      <Cards 
        key={item.id}
        item={item}
      />
    )

  })

  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      {cardsList}
    </div>
  )
}

export default App;