import Card from "./Card";
function Cards({ cards }) {
  return (
    <section className="cards-grid" id="projectsGrid">
      {cards.map((card) => {
        return (
          <Card
            key={card.projectName}
            projectName={card.projectName}
            desc={card.desc}
            tag1={card.tag1}
            tag2={card.tag2}
            imgURL={card.imageURL}
            category={card.category}
          />
        );
      })}
    </section>
  );
}

export default Cards;
