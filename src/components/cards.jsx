import katie from "../public/Images/katie-zaferes.png"
import starImg from '../public/images/star.png'

const Cards = (props) => {
  console.log(props)
  return(
    <div className="cards-container">
      <img className="card-images" src={katie}></img>
      <div className="undertext-container">
        <img id="starimg" src={starImg}></img>
        <p id="rating">5.0</p>
        <p id="amount">(6)</p>
        <p id="country">USA</p>
      </div>
      <div className="undertext-second">
        <p id="description">Life lessons with Katie Zafares</p>
      </div>
      <div className="undertext-third">
        
      </div>
    </div>
  )
}

export default Cards;