import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <ContainerAbout>
      <div>
        <h1>About</h1>
        <p>
          This project was created in the "Individual Project" instance in the
          Henry's bootcamp, where he had 15 days of work, where he He worked
          with technologies such as React, Redux, Express, Sequelize and
          postgres. The objective of this project was to build a page where show
          dogs, contains a landing page, a home with 8 dogs, with a navigation
          bar to search by name and/or ID, a section of creation of dogs, a page
          to navigate between the different pages, filtering by Db/Api,
          temperaments, alphabetical order and by weight, a detail of each dog
          and an About section.
        </p>
      </div>
    </ContainerAbout>
  );
}

const ContainerAbout = styled.div`
  background-color: #ffe4c4;
`;
