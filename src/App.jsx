/* eslint-disable react/jsx-key */
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import data from './components/data'

function App () {
  const cardsList = data.map(item => {
    return (
      <Cards 
        img={item.coverImg}
        rating={item.rating}
        amount={item.amount}
        country={item.country}
        description={item.description}
        price={item.price}
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