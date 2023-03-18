import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ id, image, name, temperament, weight, height }) {
  return (
    <ConteinerCard>
      <div className="card">
        <Link to={`/details/${id}`}>
          <div className="img2">
            {image && <img src={image} alt="Dog" className="img" />}
          </div>
          <h1 className="name">{name}</h1>
          <div className="texto">
            <div>
              <h3>Temperament: </h3>
              <h4>{temperament}</h4>
            </div>
            <div>
              <h3>Weight: </h3>
              <h4>{weight}</h4>
            </div>
          </div>
        </Link>
      </div>
    </ConteinerCard>
  );
}

const ConteinerCard = styled.div`
  .card {
    border-radius: 10px;
    background-color: #c3fcf2;
    box-shadow: 10px 3px 7px grey;
    width: 350px;
    height: 500px;
    margin: 1rem;
  }

  .img {
    border-radius: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -50px;
    width: 300px;
    height: 220px;
    object-fit: cover;
  }

  .img2 {
    padding-top: 4rem;
  }

  .name {
    text-align: center;
  }

  .texto {
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: center;
    margin: 1.5rem;
  }
`;
