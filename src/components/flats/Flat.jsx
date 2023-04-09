import "./flat.css";
import ApartmentImg from "../../assets/img/apartment.jpg";
import Glush from "../../assets/img/glush.png";
import { Link } from "react-router-dom";

export default function Flat(props) {
  return (
    <div className="flat-div">
      <Link to={`/space/${props.item.id}`} style={{ textDecoration: "none" }}>
        <img
          src={
            Array.isArray(props.item.image_urls)
              ? props.item.image_urls[0]
              : props.item.image_urls
          }
          alt=""
          className="flat-img"
        />
        <span className="flat-title">{props.item.name}</span>
      </Link>
      <span className="flat-address">{props.item.address}</span>
      <span className="flat-price">Price: {props.item.price}$ per hour</span>
    </div>
  );
}
