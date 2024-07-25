import React, { useEffect, useState, useContext } from 'react';
import Pet from './Pet';
import Result from './Result';
import useBreads from './useBreads';
import { useQuery } from '@tanstack/react-query';
import { PitContext } from './PitContext';
import { useNavigate } from 'react-router-dom';

import Helmet from 'react-helmet';

const Animales = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
function Search() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [bread, setBread] = useState('');
  const [pets, setPets] = useState([]);
  const [myBreads, err, load] = useBreads(animal);

  const navigate = useNavigate();

  async function getPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${bread}`,
    );
    const data = await response.json();
    setPets(data.pets);
    console.log(pets);
    window.localStorage.setItem('pets', JSON.stringify(data.pets));
  }
  useEffect(() => {
    getPets();
  }, [bread]);

  return (
    <>
      <Helmet>
        <title> search pets </title>
        <link
          rel="icon"
          type="image/png"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXw9JnTSonFTcng3PHat1pDNX4DanGg9iSQ&s"
        />
      </Helmet>
      <div className="search-params mx-auto ">
        <form
          className="h-50 g-5"
          onSubmit={(e) => {
            e.preventDefault();
            getPets();
            const formData = new FormData(e.target);
            navigate('/result');
          }}
        >
          <label htmlFor="location">
            location
            <input
              type="text"
              id="location"
              className="border border-secondary p-2 bg-white"
              name="location"
              value={location}
              placeholder="Enter location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </label>

          <label htmlFor="animal">
            animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                console.log(e.target.value, animal);
              }}
            >
              {Animales.map((ele) => (
                <option key={ele} value={ele} name={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="bread">
            bread
            <select
              id="bread"
              value={bread}
              onChange={(e) => {
                setBread(e.target.value);
                console.log(e.target.value, animal);
              }}
            >
              {myBreads.map((ele) => (
                <option key={ele} value={ele} name={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </label>

          <button className="padding5">submit</button>
        </form>
      </div>
    </>
  );
}

export default Search;
