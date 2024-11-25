import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Keep Router imports
import Contact from './Contact'; 

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState(null);

  const handleImageClick = (description) => {
    setSelectedImage(true);
    setImageDescription(description);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setImageDescription(null);
  };

  return (
    <Router> 
      <div className="app-container">
        <header className="header">
        <div className="logo">David Hejtmánek - Portfolio</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>

        <Routes>
          <Route 
            path="/" 
            element={
              <main>
                <section id="home" className="content">
                  <div className="text-container">
                    <h1>Vítejte na mém portfoliu</h1>
                    <p>Toto je místo, kde ukazuji svou práci a úspěchy.</p>
                  </div>
                </section>

                <section id="about" className="content">
                  <h1>O mně</h1>
                  <p>
                    Jsem David Hejtmánek, je mi 17 let a bydlím blízko Zlína. Rád hraji hry a trávím čas u počítače.
                  </p>
                  <p>
                    Momentálně studuji na škole Baltaci ve 3. ročníku v oboru IT. Soustředím se na rozvoj svých dovedností v oblasti webového vývoje.
                  </p>
                  <p>
                    V budoucnu bych se rád zaměřil na tvorbu moderních webových aplikací a vývoj technologií, které zlepší každodenní život lidí. Věřím, že technologie mohou změnit svět k lepšímu, a chci se na tomto procesu podílet.
                  </p>
                </section>

                <section id="projects" className="content">
                  <h1>Projekty</h1>
                  <div className="projects-gallery">
                    <div className="project-item" onClick={() => handleImageClick('Tento 3D model iPhonu je součástí mého projektového portfolia. Byla to výzva pracovat s Blenderem a vytvořit pokročilý model telefonu v low poly stylu, který je ideální pro herní či mobilní aplikace. Tento model je součástí asset packu, který může být použit pro různé interaktivní projekty.')}>
                      <img src="/photos/Model17Pokoj.png" alt="Project 1" />
                      <p>Projekt 1 - 3D Model Telefonu</p>
                    </div>
                    <div className="project-item" onClick={() => handleImageClick('Toto logo bylo navrženo pro firmu Lavender Studios. Cílem bylo vytvořit moderní a minimalistický design, který by odrážel kreativní a inovativní ducha společnosti. Použil jsem Photoshop pro jemné detaily, výběr barev a typografii, což pomohlo firmě vybudovat silnou vizuální identitu.')}>
                      <img src="/photos/Hejtmanek-3.png" alt="Project 2" />
                      <p>Logo pro firmu</p>
                    </div>
                    <div className="project-item" onClick={() => handleImageClick('Tento obal pro album „Space Feelings“ je výsledkem mé spolupráce s umělcem Lil Cizech. Cílem bylo vytvořit něco, co by zachytilo esenci jeho hudby – jemné, futuristické a surrealistické. Obal je zaměřen na vesmírnou tématiku s nádechem nostalgie a psychadelických prvků.')}>
                      <img src="/photos/Album_SpaceFeelings.png" alt="Project 3" />
                      <p>Album</p>
                    </div>
                  </div>
                </section>

                <section id="skills" className="content">
                  <h1>Dovednosti</h1>
                  <p>Ovládám částečně programovací jazyk C# ve webu HTML, CSS a JavaScript.</p>
                  <p>Další dovednosti zahrnují 2D grafiku, práci ve Photoshopu, střih videí a 3D modelování.</p>
                </section>

                <section id="contact" className="content">
                  <h1>Kontakt</h1>
                  <div className="contact-info">
                    <p><strong>Email:</strong> david.hejtmanek@example.com</p>
                    <p><strong>Telefon:</strong> +420 123 456 789</p>
                    <p><strong>Adresa:</strong> Zlín, Česká republika</p>
                  </div>
                </section>
              </main>
            }
          />

          <Route 
            path="/projects" 
            element={
              <section id="projects" className="content">
                <h1>Projekty</h1>
                <div className="projects-gallery">
                  <div className="project-item" onClick={() => handleImageClick('Tento 3D model iPhonu je součástí mého projektového portfolia. Byla to výzva pracovat s Blenderem a vytvořit pokročilý model telefonu v low poly stylu, který je ideální pro herní či mobilní aplikace. Tento model je součástí asset packu, který může být použit pro různé interaktivní projekty.')}>
                    <img src="/photos/Model17Pokoj.png" alt="Project 1" />
                    <p>Projekt 1 - 3D Model Telefonu</p>
                  </div>
                  <div className="project-item" onClick={() => handleImageClick('Toto logo bylo navrženo pro firmu Lavender Studios. Cílem bylo vytvořit moderní a minimalistický design, který by odrážel kreativní a inovativní ducha společnosti. Použil jsem Photoshop pro jemné detaily, výběr barev a typografii, což pomohlo firmě vybudovat silnou vizuální identitu.')}>
                    <img src="/photos/Hejtmanek-3.png" alt="Project 2" />
                    <p>Logo pro firmu</p>
                  </div>
                  <div className="project-item" onClick={() => handleImageClick('Tento obal pro album „Space Feelings“ je výsledkem mé spolupráce s umělcem Lil Cizech. Cílem bylo vytvořit něco, co by zachytilo esenci jeho hudby – jemné, futuristické a surrealistické. Obal je zaměřen na vesmírnou tématiku s nádechem nostalgie a psychadelických prvků.')}>
                    <img src="/photos/Album_SpaceFeelings.png" alt="Project 3" />
                    <p>Album</p>
                  </div>
                </div>
              </section>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>"Při potížích s únavou nenajdete lepší pomoc než je <span className="rohypnol">Rohypnol</span>" - David Hejtmánek</p>
        </footer>

        {selectedImage && (
          <div className="project-description">
            <div className="content">
              <span className="close-btn" onClick={closeImage}>X</span>
              <p>{imageDescription}</p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
