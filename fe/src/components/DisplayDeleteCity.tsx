import { useQuery, useMutation, gql } from '@apollo/client';

interface City {
  id: string;
  city: string;
  country: string
}

/*
* Main function for displaying and deleting cities
* @param - no input parameters
* return - JSX / TSX
*/
export const DisplayDeleteCity = ()=> {

//Constant and variables
// Query
const FEED_QUERY = gql`
  {
    info
    feed{
      id
      city
      country
      }
  }
`;

// Mutation
const DELETE_CITY = gql`
  mutation DeleteCity ($id: String!)
    {
      deleteCity(id: $id)
    }
`;

//Custom Hooks
const { data } = useQuery(FEED_QUERY);
const [deleteCity, { loading, error }] = useMutation(DELETE_CITY);

// Event handling
const onDeleteCity = (e:any, id:string)=>{
  e.preventDefault();
  deleteCity({ variables: { id } })
  // Refresh screen after deletion
  .then(()=>window.location.reload());
}

// Wait till data is there
if (loading)  return <p>Submitting... </p>;
if (error)    return <p>`Submission error! ${error.message}`</p>;
if (!data)    return <p>Loading... </p> 

console.log('data: ', data);

const cities:City[] = data.feed;


return(
<div className="container">
  
  <h3 className="d-flex pl-10 pt-5">List and Delete Cities</h3>
  <div className="container pr-20">
    <div className="row bg-info bg-opacity-25  ">
      <div className="  col-sm d-flex justify-content-around ">
        City
      </div>
      <div className="col-sm d-flex justify-content-around">
        Country
      </div>
      <div className="col-sm d-flex justify-content-around">
        Delete  
      </div>
    </div>

    <div className="pt-2">
      {cities.map(city =>
        <div key={city.id} className="row">
          <div className="col-sm d-flex justify-content-around">
              <span key={city.id}>{city.city} </span>
          </div>
          <div className="col-sm d-flex justify-content-around">
              <span key={city.id}>{city.country} </span> 
          </div>
          <div className="col-sm d-flex justify-content-around">
            <button key={city.id} type="button" onClick={(e)=>onDeleteCity(e,city.id)}>D</button>
          </div>
        </div>
      )}
    </div>
  </div>  

</div>

)}