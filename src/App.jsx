/* eslint-disable react/jsx-key */
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import data from './components/data'

function App () {
  const Cards = data.map(item => {
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
      {Cards}
    </div>
  )
}

export default App;