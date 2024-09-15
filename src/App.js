import React from 'react';
import Card from './components/card'; 
import './App.css';

function App() {
  const cards = [
    {
      title: "Taj Mahal",
      features: "Elegant Mausoleum, Symbolic Love",
      image: "/my-image.jpg" // Assuming you are using local image from public directory
    },
    {
      title: "Charminar",
      features: "Historic Landmark, Architectural Marvel",
      image: "/my-image2.jpg" // Assuming you are using local image from public directory
    },
    {
      title: "Qutub Minar",
      features: "Tallest Minaret, UNESCO World Heritage",
      image: "/my-image4.jpg" // Assuming you have a local image
    },
    {
      title: "Red Fort",
      features: "Historic Fortification, Mughal Architecture",
      image: "/my-image3.jpg" // Assuming you have a local image
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Holiday Catalog</h1>
      </header>
      <main className="App-main">
        {cards.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            features={card.features}
            image={card.image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
