import { Link } from "react-router-dom";
import '../GalleryNavigation/GalleryNavigation.css';

function GalleryItem(props) {
  return (
    <Link to={`/galleries/${props.gallery.id}`}>
      <li className="gallery-item">{props.gallery.name}</li>
    </Link>
  );
}

export default GalleryItem;