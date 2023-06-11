/* eslint-disable react/prop-types */
import starImg from '../public/images/star.png'

export default function Cards(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  
  return (
    <div className="cards-container">
      <img className="card-images" src={props.item.coverImg} alt=""></img>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <div className="undertext-container">
        <img id="starimg" src={starImg} alt=""></img>
        <p id="rating">{props.item.rating}</p>
        <p id="amount">({props.item.amount})</p>
        <p id="country">{props.item.location}</p>
      </div>
      <div className="undertext-second">
        <p id="description">{props.item.description}</p>
      </div>
      <div className="undertext-third">
        <p id="price">From ${props.item.price}</p><p>/person</p>
      </div>
    </div>
  );
}