import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';


const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  // runs after the first render
  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className={'search-params'}>
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location"
                 value={location}
                 onChange={event => setLocation(event.target.value)}
                 placeholder={'Location'}
                 type="text"
          />
        </label>
        <br/>
        <br/>
        <AnimalDropdown/>
        <br/>
        <br/>
        <BreedDropdown/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>

    </div>
  );
};

export default SearchParams;
