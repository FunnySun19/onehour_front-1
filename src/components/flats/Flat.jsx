import "./flat.css"
import ApartmentImg from "../../assets/img/apartment.jpg"
import Glush from "../../assets/img/glush.png"
import { Link } from "react-router-dom";


export default function Flat(props) {
  return (
    <div className="flat-div">
        <Link to={`/space/${props.item.id}`} style={{ textDecoration: "none" }}>
        <img src={props.item.image_urls} alt="" className="flat-img"/>
        </Link>
        <span className="flat-title">{props.item.name}</span>
        <span className="flat-address">{props.item.address}</span>
        <span className="flat-price">PRICE:{props.item.price}$ per night</span>
    </div>
  )
}
