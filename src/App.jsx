import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
import PeopleList from './components/PeopleList';
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPeopleHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const { data } = response;
      const transformedPeople = data.results.map((peopleData) => {
        return {
          name: "Name:" + peopleData.name,
          gender: "Gender:" + peopleData.gender,
          birthYear: "Year of Birth:" + peopleData.birth_year,
        };
      });
      setPeople(transformedPeople);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPeopleHandler();
  }, [fetchPeopleHandler]);

  let content = <p>Person's profile not found.</p>;

  if (people.length > 0) {
    content = <PeopleList people={people} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = 
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  }
  return <section>{content}</section>;
}

export default App
