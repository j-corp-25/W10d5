import { useParams } from "react-router-dom";

function GalleryView(galleries) {
    const galleryId  = useParams();




    return (
        <h1>{galleries.records.find(galleries.records[galleryid] === galleryId)}</h1>

    )

}

export default GalleryView

// function Jobshow() {
//     const params = useParams();
//     const jobId  = params.jobId;
//     const job = jobData[jobId];

//     return (
//         <div class="job-show">
//         <>
//     )
// }
