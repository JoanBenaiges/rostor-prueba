import Navigation from "./components/Navigation"
import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <Navigation language={language} toggleLanguage={toggleLanguage} />
      <AppRoutes language={language} />
      <Footer language={language} />
    </>
  )
}

export default App
