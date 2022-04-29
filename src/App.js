import './App.css';
import NavBar from "./UI/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import GalleryCardSW from "./pages/GalleryCard/GalleryCardSW";
import AboutMe from "./pages/AboutMe/About";
import Page404 from "./pages/404Page/404Page";
import GalleryCardPhoto from "./pages/GalleryCard/GalleryCardPhoto";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Gallery/>}/>
                    <Route path="/card/:id" element={<GalleryCardSW/>}/>
                    <Route path="/photo/:id" element={<GalleryCardPhoto/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
