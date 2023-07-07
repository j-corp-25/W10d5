
import { Redirect, Route, Switch } from "react-router-dom";
import  harvardArt  from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {

  return (
    <div className="pageWrapper">
      <Route path="/galleries/:galleryId" component={GalleryView} />
      <GalleryNavigation galleries={harvardArt.records} />
      <GalleryView galls={harvardArt.records}/>
    </div>

  );
}

export default App;
