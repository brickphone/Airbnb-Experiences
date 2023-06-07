/* eslint-disable react/prop-types */
import starImg from '../public/images/star.png'

export default function Cards(props) {
  console.log(props)
  return (
    <div className="cards-container">
      <img className="card-images" src={props.img}></img>
      <div className="undertext-container">
        <img id="starimg" src={starImg}></img>
        <p id="rating">{props.rating}</p>
        <p id="amount">{props.amount}</p>
        <p id="country">{props.country}</p>
      </div>
      <div className="undertext-second">
        <p id="description">{props.description}</p>
      </div>
      <div className="undertext-third">
        <p id="price">{props.price}</p><p>/person</p>
      </div>
    </div>
  )
}

