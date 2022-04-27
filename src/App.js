import './App.css';
import NavBar from "./UI/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import GalleryCard from "./pages/GalleryCard/GalleryCard";
import AboutMe from "./pages/AboutMe/AboutMe";
import Page404 from "./pages/404Page/404Page";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Gallery/>}/>
                    <Route path="/card/:id" element={<GalleryCard/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
