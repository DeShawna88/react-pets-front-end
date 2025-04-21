// src/App.jsx
import { useState, useEffect } from 'react';
// Add an import for the petService functions
import * as petService from './services/petService';  // * imports all exported functions from petService.js to be used as a new petService object

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  return <h1>Hello world!</h1>;
};

export default App;
