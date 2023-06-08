import katie from './public/images/katie-zaferes.png'
import wedding from './public/images/wedding-photography.png'
import bike from './public/images/mountain-biking.png'

export default [
  {
    id:1,
    coverImg:"src": "./public/images/katie-zaferes.png",
    rating:5.0,
    amount:6,
    country:"USA",
    description: "Life lessons with Katie Zafare",
    price: 136,
    avail:"SOLD OUT"
  },
  {
    id:2,
    coverImg:{wedding},
    rating:5.0,
    amount:30,
    country:"USA",
    description: "Learn wedding photography",
    price:125,
    avail:"ONLINE"
  },
  {
    id:3,
    coverImg:{bike},
    rating:4.8,
    amount:2,
    description:"Group Mountain Biking",
    price:50,
  }
]