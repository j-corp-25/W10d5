import { harvardArt } from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  const galleries = harvardArt.records;
  return (
    <GalleryNavigation galleries={galleries} />
  );
}

export default App;
