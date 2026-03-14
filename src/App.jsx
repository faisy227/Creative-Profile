import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FilterBtns from "./FilterBtns";
import SortBtns from "./SortBtns";
import Cards from "./Cards";
import ProjectForm from "./ProjectForm";
import "./index.css";

function App() {
  let filters = ["all", "design", "development", "art", "photography"];
  let sorts = ["oldest", "newest"];

  const initialCards = [
    {
      id: crypto.randomUUID(),
      projectName: "Modern UI Design",
      tag1: "Design",
      tag2: "UI/UX",
      desc: "A clean and modern user interface design with focus on usability and aesthetics.",
      category: "design",
      imageURL:
        "https://images.unsplash.com/photo-1676116777245-1cc40079cd38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1048",
    },

    {
      id: crypto.randomUUID(),
      projectName: "Web Application",
      tag1: "Development",
      tag2: "Web",
      desc: "Full-stack web application with responsive design and modern technologies.",
      category: "development",
      imageURL:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },

    {
      id: crypto.randomUUID(),
      projectName: "Digital Artwork",
      tag1: "Art",
      tag2: "Digital",
      desc: "Expressive digital artwork created with advanced techniques and creative vision.",
      category: "art",
      imageURL:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },

    {
      id: crypto.randomUUID(),
      projectName: "Urban Photography",
      tag1: "Photography",
      tag2: "Urban",
      desc: "Capturing the essence of city life through unique perspectives and compositions.",
      category: "photography",
      imageURL:
        "https://images.unsplash.com/photo-1600096200983-cde7f95fe628?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },

    {
      id: crypto.randomUUID(),
      projectName: "Brand Identity",
      tag1: "Design",
      tag2: "Branding",
      desc: "Complete brand identity system including logo, typography, and visual elements.",
      category: "design",
      imageURL:
        "https://images.unsplash.com/photo-1590102426319-c7526718cd70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },

    {
      id: crypto.randomUUID(),
      projectName: "Mobile Interface",
      tag1: "Design",
      tag2: "Mobile",
      desc: "Intuitive mobile application interface designed for optimal user experience.",
      category: "design",
      imageURL:
        "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
  ];

  // Because allCards is the full collection/ MATSER LIST.
  const [allCards, setAllCards] = useState(initialCards);
  //  And cards is the filtered version / DISPLAT VERSION.
  const [cards, setCards] = useState(initialCards);

  const addCard = (newCard) => {
    // since allCards is a master copy of cards, you update it
    // when you update cards
    setAllCards((prev) => [...prev, newCard]);
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Hero allCards={allCards} setCards={setCards} />

        <div className="main-content">
          <div className="content-primary">
            <div className="controls">
              <FilterBtns
                filters={filters}
                allCards={allCards}
                setCards={setCards}
              />
              <SortBtns sorts={sorts} allCards={allCards} setCards={setCards} />
            </div>
            <Cards cards={cards} />
          </div>
        </div>
        <ProjectForm onAddCard={addCard} />
      </main>
    </>
  );
}

export default App;
