import { useEffect } from 'react';
import Home from './pages/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  
  
  useEffect(() => {
    Aos.init({ 
      duration: 1000, 
      disable: 'mobile'
        });
  }, []);

  useEffect(() => {
  const wakeUpServer = async () => {
    try {
      await fetch("https://portfolio-back-wqtk.onrender.com");
    } catch (error) {
      console.log("Backend dormido, despertando...");
    }
  };

  wakeUpServer();
}, []);
  

  return (
    <>
    <Home/>
    </>
  )
}

export default App
