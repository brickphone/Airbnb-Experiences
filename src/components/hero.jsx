import photogrid from './Pictures/photo-grid.png'
 
const Hero = () => {
  return (
    <main className='hero-container'>
      <img className='photo-grid' src={photogrid}></img>
      <div className='text-container'>
        <h1 className='online-experiences'>Online Experiences</h1>
        <h3 className='h3'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
      </div>
      
    </main>
  )
}

export default Hero;