// import Photo from '../imgs/katie-zaferes.png';
import Star from '../imgs/star.png';

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "online") {
        badgeText = "ONLINE"
    }
    return(
        <div className = "card">
            {badgeText && <div className = "badge">{badgeText}</div>}
            <img className = "card-img" src = {props.img} alt = "" />
            <div className = "star-section">
                <img src = {Star}  alt = "" />
                <span>{props.rating}</span>
                <span className = "gray">{props.reviewCoun} &bull;  </span>
                <span className = "gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className = "bold">From {props.price}</span>/ person</p>
        </div>
    )
}