import React, { useState } from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Paged() {
  const pagination = [];
  const [pages, setPages] = useState(0);
  const dogs = useSelector((state) => state.filtered);
  let numDogs = Math.ceil(dogs.length / 8);
  for (let i = 1; i <= numDogs; i++) {
    pagination.push(i);
  }

  return (
    <ContainerPaged>
      <div>
        {pagination.length &&
          pagination.map((x, i) => (
              <button
                key={i}
                onClick={() => {
                  setPages(i * 8 );
                }}
              >
                {x}
              </button>
          ))}
        <Cards pages={pages} />
      </div>
    </ContainerPaged>
  );
}

const ContainerPaged = styled.div`
 
  
`;

