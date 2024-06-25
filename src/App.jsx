import Navigation from "./components/Navigation"
import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <Navigation language={language} toggleLanguage={toggleLanguage} />
      <AppRoutes language={language} />
    </>
  )
}

export default App
