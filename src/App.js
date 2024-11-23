import React, { useState } from 'react';
import './App.css';

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
    <div className="app-container">
      <header className="header">
        <div className="logo">David Hejtmánek - Portfolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

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
          <p>Email: david07@post.cz</p>
          <a href="kontact-hejtmanek.vercel.app" className="contact-link">Full Contact</a>
        </section>
      </main>


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
  );
}

export default App;
