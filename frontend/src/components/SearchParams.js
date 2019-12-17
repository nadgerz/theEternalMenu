import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';


const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);

  return (
    <div className={'searc-params'}>
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location"
                 value={location}
                 onChange={event => setLocation(event.target.value)}
                 placeholder={'Location'}
                 type="text"
          />
          <button>Submit</button>
        </label>
        <br/>
        <label htmlFor="animal">
          Animal
          <select id={'animal'}
                  value={animal}
                  onChange={event => setAnimal(event.target.value)}
                  onBlur={event => setAnimal(event.target.value)}
          >
            <option value="all">All</option>
            {
              ANIMALS.map(animal =>
                <option key={animal}
                        value={animal}
                >{animal}</option>,
              )
            }
          </select>
        </label>
        <br/>
        <label htmlFor="breed">
          Breed
          {/* is disabled if no breeds available */}
          <select id={'breed'}
                  disabled={!breeds.length}
                  onChange={event => setBreed(event.target.value)}
                  onBlur={event => setBreed(event.target.value)}
                  value={breed}
          >
            <option value="all">All</option>
            {
              breeds.map(breedString =>
                <option key={breedString}
                        value={breedString}
                >{breedString}</option>,
              )
            }
          </select>
        </label>
      </form>

    </div>
  );
};

export default SearchParams;
