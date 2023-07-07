import  harvardArt  from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {
  // const art = Object.values(harvardArt)

  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;
