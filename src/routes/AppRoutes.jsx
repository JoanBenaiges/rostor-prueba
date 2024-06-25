import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import OurProducts from "../pages/OurProducts"
import { Routes, Route } from "react-router-dom";

const AppRoutes = ({ language, toggleLanguage }) => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<Index language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/about-us'}
                element={<AboutUs language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/contact'}
                element={<Contact language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/our-products'}
                element={<OurProducts language={language} toggleLanguage={toggleLanguage} />}
            />

        </Routes>
    );
};

export default AppRoutes;