import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDetails } from "../Redux/actions/actions";
import img from "../assets/image/dog.png"
import styled from "styled-components";

export default function DetailDog() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <ContainerDetail>
      <div className="details">
        <img src={details.image ? details.image : img} alt="img not found" className="imagen" />
        <h3>{details.name}</h3>
        <h3>{details.createInDb ? details.temperament : details.temperament}</h3>
        <h3>{details.createInDb ? `${details.heightMin} - ${details.heightMax}` : details.height + " cm"}</h3>
        <h3>{details.createInDb ? `${details.weightMin} - ${details.weightMax}` : details.weight + " kg"}</h3>
        <h3>{details.createInDb ? `${details.yearsOfLifeMin} - ${details.yearsOfLifeMax}` : details.yearsOfLife}</h3>
      </div>
    </ContainerDetail>
  );
}

const ContainerDetail = styled.div`
  .details {
    width: 100%;
    padding-right: 5px;
    color: brown;
    align-items: center;
    display: inline-block;
    text-align: center;
  }

  .imagen {
    width: 20%;
    height: 20%;
    border-radius: 10px;
  }
`;
