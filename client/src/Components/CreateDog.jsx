import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDog,
  getAllDogs,
  getTemperaments,
} from "../Redux/actions/actions";
import styled from "styled-components";

export default function CreateDog() {
  const temperaments = useSelector((state) => state.temple);
  const dispatch = useDispatch();

  const [newdog, setNewdog] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    yearsOfLifeMin: "",
    yearsOfLifeMax: "",
    image: "",
    temperament: [],
  });

  function validate(input) {
    let error = {};
    if (input.name.length < 2) {
      error.name = "The breed of the dog must have at least 2 letters";
    }
    if (input.heightMin < 20) {
      error.heightMin = "It cannot be less than 20 cm";
    }
    if (input.heightMax <= input.heightMin) {
      error.height =
        "The maximum height cannot be less than or equal to the minimum";
    }
    if (input.heightMax > 120) {
      error.heightMax = "It cannot be greater than 120 cm";
    }
    if (input.weightMin < 1) {
      error.weightMin = "It cannot be less than 1 kg";
    }
    if (input.weightMax <= input.weightMin) {
      error.weight =
        "The maximum weight cannot be less than or equal to the minimum";
    }
    if (input.weightMax > 120) {
      error.weightMax = "It cannot weigh more than 150 kg";
    }
    if (input.yearsOfLifeMin < 3) {
      error.yearsOfLifeMin = "Life expectancy cannot be less than 3 years";
    }
    if (input.yearsOfLifeMax < input.yearsOfLifeMin) {
      error.yearsOfLife =
        "The maximum life expectancy cannot be less than or equal to the minimum";
    }
    if (input.yearsOfLifeMax > 25) {
      error.yearsOfLifeMax = "Life expectancy cannot be greater than 25 years";
    }

    return error;
  }

  const error = validate(newdog);

  function handleChange(e) {
    setNewdog({ ...newdog, [e.target.name]: e.target.value });
  }

  function handleChangeTemperament(e) {
    setNewdog({
      ...newdog,
      temperament: [...newdog.temperament, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createDog(newdog));
  }

  function handleClose(event) {
    event.preventDefault();
    setNewdog({
      ...newdog,
      temperament: newdog.temperament.filter((e) => e !== event.target.value),
    });
  }

  function handleGoToHome() {
    alert("The dog has been created successfully");
  }

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch, getAllDogs, getTemperaments]);

  return (
    <ContainerCreateDog>
      <div className="bodycreate">
        <div className="create">
          <form onSubmit={handleSubmit} className="content">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                value={newdog.name}
                required
              />
              <p className="formerror">{error.name}</p>
            </div>
            <div>
              <label>Height min</label>
              <input
                type="number"
                name="heightMin"
                onChange={(e) => handleChange(e)}
                value={newdog.heightMin}
                required
              />
              <p className="formerror">{error.heightMin}</p>
            </div>
            <div>
              <label>Height max</label>
              <input
                type="number"
                name="heightMax"
                onChange={(e) => handleChange(e)}
                value={newdog.heightMax}
                required
              />
              <p className="formerror">{error.height}</p>
              <p className="formerror">{error.heightMax}</p>
            </div>
            <div>
              <label>Weight min</label>
              <input
                type="number"
                name="weightMin"
                onChange={(e) => handleChange(e)}
                value={newdog.weightMin}
                required
              />
              <p className="formerror">{error.weightMin}</p>
            </div>
            <div>
              <label>Weight max</label>
              <input
                type="number"
                name="weightMax"
                onChange={(e) => handleChange(e)}
                value={newdog.weightMax}
                required
              />
              <p className="formerror">{error.weight}</p>
              <p className="formerror">{error.weightMax}</p>
            </div>
            <div>
              <label>Years of life min</label>
              <input
                type="number"
                name="yearsOfLifeMin"
                onChange={(e) => handleChange(e)}
                value={newdog.yearsOfLifeMin}
                required
              />
              <p className="formerror">{error.yearsOfLifeMin}</p>
            </div>
            <div>
              <label>Years of life max</label>
              <input
                type="number"
                name="yearsOfLifeMax"
                onChange={(e) => handleChange(e)}
                value={newdog.yearsOfLifeMax}
                required
              />
              <p className="formerror">{error.yearsOfLife}</p>
              <p className="formerror">{error.yearsOfLifeMax}</p>
            </div>
            <div>
              <label>Image</label>
              <input
                type="text"
                name="image"
                onChange={(e) => handleChange(e)}
                value={newdog.image}
              />
            </div>
            <div>
              <label>Temperaments</label>
              <select
                name="temperament"
                onChange={(e) => handleChangeTemperament(e)}
                required
              >
                {temperaments?.map((x) => {
                  return (
                    <option key={x.id} value={x.name}>
                      {x.name}
                    </option>
                  );
                })}
              </select>
              <div>
                {newdog.temperament?.map((x, i) => (
                  <span key={i} value={x}>
                    {x}
                    <button onClick={handleClose} value={x}>
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
              <button
                type="submit"
                disabled={
                  !newdog.name ||
                  !newdog.heightMin ||
                  !newdog.heightMax ||
                  !newdog.weightMin ||
                  !newdog.weightMax ||
                  !newdog.yearsOfLifeMin ||
                  !newdog.yearsOfLifeMax
                }
                onClick={() => {
                  handleGoToHome();
                }}
              >
                Create dog
              </button>
          </form>
        </div>
      </div>
    </ContainerCreateDog>
  );
}

const ContainerCreateDog = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content input {
    width: 300px;
    margin: 10px;
  }
  .content button {
    width: 100px;
    margin: 10px;
  }
  .content select {
    width: 300px;
    margin: 10px;
    padding: 1px 2px;
  }

  .bodycreate {
    background-color: #ffe4c4;
    height: 100%;
  }

  .create {
    padding-top: 50px;
  }

  .formerror {
    color: red;
  }
`;
