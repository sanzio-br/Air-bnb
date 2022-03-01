import Photo from './imgs/katie-zaferes.png';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';



export default function App(){
  const cardData = Data.map(Data  =>{
    return <Card 
    img ={Photo}
    rating={Data.stats.rating}
    reviewCount={Data.stats.reviewCount}
    location={Data.location}
    title={Data.title}
    price={Data.price}
    openSpots={Data.openSpots}
    />
  })
    return(
        <div className = "App">
            <Navbar />
            <Hero />
            <div className="cards section">
              {cardData}
            </div>
        </div>
    )
}