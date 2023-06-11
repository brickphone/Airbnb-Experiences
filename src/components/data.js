import katieImg from '../public/images/katie-zaferes.png';
import weddingImg from '../public/images/wedding-photography.png';
import bikeImg from '../public/images/mountain-biking.png';

export default [
  {
    id: 1,
    coverImg: katieImg,
    rating: 5.0,
    amount: 6,
    location: "Online",
    description: "Life lessons with Katie Zafare",
    price: 136,
    openSpots:0
  },
  {
    id: 2,
    coverImg: weddingImg,
    rating: 5.0,
    amount: 30,
    location: "Online",
    description: "Learn wedding photography",
    price: 125,
    avail: "ONLINE",
    openSpots:27
  },
  {
    id: 3,
    coverImg: bikeImg,
    rating: 4.8,
    amount: 2,
    description: "Group Mountain Biking",
    price: 50,
    openSpots:3,
    location:"Sweden"
  }
];