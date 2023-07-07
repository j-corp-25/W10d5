import {NavLink} from "react-router-dom";

function GalleryNavigation({galleries}) {
    console.log(galleries);
    return (

        <nav>
        <NavLink to='/a'> Home</NavLink>
        <h1>Galleries</h1>
        </nav>

    );
}

export default GalleryNavigation;
