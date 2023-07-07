import { useParams } from "react-router-dom";

function GalleryView(galls) {
    const galleryId  = useParams();
    console.log(galls);
    console.log(galls.gallerynumber);

    return (
    <h1> HELP </h1>
    // <h1>{galls.find(galls.values === galleryId)}</h1>
    )
}

export default GalleryView

