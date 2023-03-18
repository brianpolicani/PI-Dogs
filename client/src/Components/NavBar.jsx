import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getAllDogs } from "../Redux/actions/actions";
import SearchBar from "./SearchBar";
import styled from "styled-components";

export default function NavBar() {
  let location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch, getAllDogs]);

  const handleClick = () => {
    dispatch(getAllDogs());
  };

  return (
    location.pathname !== "/" && (
      <ContainerNavBar>
        <div className="NavBar">
          <NavLink to="/home" onClick={() => handleClick()}>
            Home
          </NavLink>
          <NavLink to="/createDog">Create dog</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="SearchBar">
          <SearchBar />
        </div>
      </ContainerNavBar>
    )
  );
}

const ContainerNavBar = styled.div`
  .NavBar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    background-color: #7ed47e;
    justify-content: center;
    height: 4rem;
    align-items: center;
  }

  .SearchBar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: #7ed47e;
    height: 2rem;
  }
`;
