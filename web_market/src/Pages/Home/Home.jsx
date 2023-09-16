import React, {useState, useEffect} from 'react'
import "./Home.css"
const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      '/Slike/Slika0.jpg',
      '/Slike/SLIKA1.jpg',
      '/Slike/Slika3.jpg',
      '/Slike/Slika4.jpg'
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        // Promeni trenutnu sliku na sledeću
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000); // Promena svakih 5 sekundi (5000ms)
  
      return () => {
        clearInterval(timer); // Očisti tajmer kad se komponenta unmountuje
      };
    }, [images]);
  
    return (
      <div className="App">
        {/* Postavite trenutnu sliku kao pozadinu */}
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL+images[currentImage]})`,
          }}
        >
          <div className='naslov'>SARIN DUCAN</div>
        </div>
      </div>
    );
}

export default Home;
