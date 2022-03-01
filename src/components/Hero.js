import Grid from '../imgs/photo-grid.png'

export default function Hero(){
    return(
        <div className = "hero section">
            <img src = {Grid} alt = "" />
            <div className= "details">
                <h1>Online Experiences</h1>
                <p>Join unique interactive
                    activities led by one-of-a-kind      hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}