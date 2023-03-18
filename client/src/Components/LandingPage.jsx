import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <ContainerLanding>
      <div className="landing">
        <NavLink to="/home">
          <button>Let's go!</button>
        </NavLink>
      </div>
    </ContainerLanding>
  );
}

const ContainerLanding = styled.div`
  .landing {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    background-image: linear-gradient(
      to left top,
      #ffe4c4,
      #f4dfbd,
      #e9dab6,
      #ded4b0,
      #d3cfab,
      #c1b999,
      #afa388,
      #9c8e78,
      #78675b,
      #51433f,
      #2b2424,
      #000000
    );
  }
`;
