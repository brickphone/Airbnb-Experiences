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
      </div>
      <p>(6)</p>
        <p>USA</p>
        <p>Life lessons with Katie Zaferes</p>
        <p>From $136</p><p>/</p><p>person</p>
    </div>
  )
}

export default Cards;