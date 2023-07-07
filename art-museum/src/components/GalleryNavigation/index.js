import {NavLink} from "react-router-dom";
import GalleryItem from "./GalleryItem";

function GalleryNavigation({galleries}) {

    const galleryList = galleries.map(gallery => {
        return <GalleryItem key={gallery.id} gallery={gallery} />;
  });

    return (
        <nav>
        <NavLink to='/'> Home </NavLink>
        <h1>{ galleryList }</h1>
        </nav>

    );
}

export default GalleryNavigation;
