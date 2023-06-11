/* eslint-disable react/prop-types */
import starImg from '../public/images/star.png'

export default function Cards(props) {
  let badgeText

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  
  return (
    <div className="cards-container">
      <img className="card-images" src={props.img} alt=""></img>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <div className="undertext-container">
        <img id="starimg" src={starImg} alt=""></img>
        <p id="rating">{props.rating}</p>
        <p id="amount">({props.amount})</p>
        <p id="country">{props.location}</p>
      </div>
      <div className="undertext-second">
        <p id="description">{props.description}</p>
      </div>
      <div className="undertext-third">
        <p id="price">From ${props.price}</p><p>/person</p>
      </div>
    </div>
  );
}