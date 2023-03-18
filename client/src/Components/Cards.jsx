import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import styled from "styled-components";
import img from "../assets/image/dog.png"

export default function Cards({pages}) {
  const filtered = useSelector((state) => state.filtered);
  
  return (
    <ContainerCards>
      <div className="cards">
        {filtered.length &&
          filtered
            .slice(pages, pages + 8)
            .map((x, i) => (
              <Card
                key={i}
                id={x.id}
                image={x.createInDb ? (x.image ? x.image : img)  : x.image}
                name={x.name}
                temperament={x.createInDb ? x.temperament : x.temperament}
                weight={
                  x.createInDb ? `${x.weightMin} - ${x.weightMax}` : x.weight
                }
              />
            ))}
      </div>
    </ContainerCards>
  );
}

const ContainerCards = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5rem;
  }
`;
