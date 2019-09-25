import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            breed={pet.breeds.primary}
            id={pet.id}
            key={pet.id}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            name={pet.name}
            media={pet.photos}
          />
        ))
      )}
    </div>
  );
};

export default Results;
