import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';


export const CreateCity = () =>{

// Constants and variables
const [city, setCity] = useState({name: '', country: ''});

// Mutation
const CREATE_CITY_MUTATION = gql`
  mutation PostMutation(
    $city: String!
    $country: String!
  )
    {
      post(city: $city, country: $country) {
        id
        city
        country
      }
    }
`;

//Custum Hooks
const [createCity] = useMutation(CREATE_CITY_MUTATION, {
  variables: {
    city: city.name,
    country: city.country
  }
});

  return (
    <div className="container">
      <h3 className="d-flex pl-10 pt-5 ">Add City</h3  >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCity()
          // Refresh screen after deletion
          .then(()=>window.location.reload());
        }}
      >
        <div className="d-flex pl-10">
          <input
            className="mb2"
            value={city.name}
            onChange={(e) =>
              setCity({
                ...city,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Enter City"
          />
          <input
            className="mb2"
            value={city.country}
            onChange={(e) =>
              setCity({
                ...city,
                country: e.target.value
              })
            }
            type="text"
            placeholder="Enter country"
          />
          <button className="" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

