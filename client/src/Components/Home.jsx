import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderByName,
  getOrderByWeight,
  getTemperaments,
  filterTemperaments,
  filterCreated,
} from "../Redux/actions/actions";
import Paged from "./Paged";
import styled from "styled-components";

export default function Home() {
  const dispatch = useDispatch();

  const temperament = useSelector((state) => state.temple);
  
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch, getTemperaments]);

  const handleChangeOrder = (e) => {
    e.preventDefault();
    dispatch(getOrderByName(e.target.value));
  };

  const handleChangeOrderWeight = (e) => {
    e.preventDefault();
    dispatch(getOrderByWeight(e.target.value));
  };

  const handleFilterTemperament = (e) => {
    e.preventDefault();
    dispatch(filterTemperaments(e.target.value));
    <button>{e.target.value}</button>;
  };

  const handleFilterCreate = (e) => {
    dispatch(filterCreated(e.target.value));
  };

  return (
    <ContainerHome>
      <div className="home1">
        <div>
          <h1>Home</h1>
          <h3>Order and filter:</h3>

          <div>
            <div>
              <select
                onChange={(e) => {
                  handleChangeOrder(e);
                }}
                className="OrderAndFilter"
              >
                <option defaultValue value="all" disabled>
                  All
                </option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
              <select
                onChange={(e) => {
                  handleChangeOrderWeight(e);
                }}
                className="OrderAndFilter"
              >
                <option defaultValue value="weight" disabled>
                  Weight
                </option>
                <option value="wmin">Min weight</option>
                <option value="wmax">Max weight</option>
              </select>
            </div>
            <select
              defaultValue="default"
              onChange={(e) => {
                handleFilterTemperament(e);
              }}
              className="OrderAndFilter"
            >
              <option value="default" disabled>
                Temperaments
              </option>
              <option key={0} value="All">
                All
              </option>
              {temperament.map((x) => (
                <option key={x.id} value={x.name}>
                  {x.name}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => {
                handleFilterCreate(e);
              }}
              className="OrderAndFilter"
            >
              <option defaultValue value="All">
                All
              </option>
              <option value="created"> Db</option>
              <option value="api">Api</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Paged />
      </div>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  .home1 {
    background-color: #ffe4c4;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .OrderAndFilter {
    margin: 0px 0px 0px 0px;
  }

  .containerPaged {
    display: flex;
    flex-wrap: wrap;
  }
`;
