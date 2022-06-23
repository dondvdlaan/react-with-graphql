import { useQuery, useMutation, gql } from '@apollo/client';


export const DisplayUpdateDeleteCity = ()=> {

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

//Custom Hooks
const { data } = useQuery(FEED_QUERY);

// Event handling
const onDeleteCity = ()=>{

}

if(!data){
    return <p>Loading... </p> 
}
console.log('data: ', data);
console.log('data: ', data['feed'][0].description);
const dataII = (data['feed']);
console.log('dataII: ', dataII);

return(
<>

<div className="container">
  
  <h3 className="d-flex pl-10 pt-2">List and Delete Cities</h3>
  <div className="container pr-20">
    <div className="row bg-warning ">
      <div className="col-sm d-flex justify-content-around ">
        City
      </div>
      <div className="col-sm d-flex justify-content-around">
        Country
      </div>
      <div className="col-sm d-flex justify-content-around">
        Delete  
      </div>
    </div>

    {dataII. map(desc =>
      <div className="row">
        <>
        <div className="col-sm d-flex justify-content-around">
            <span key={desc.id}>{desc.city} </span>
        </div>
        <div className="col-sm d-flex justify-content-around">
            <span key={desc.id}>{desc.country} </span> 
        </div>
        <div className="col-sm d-flex justify-content-around">
          <button type="button" onClick={onDeleteCity}>D</button>
        </div>
        </>
      </div>
    )}
  </div>  
            

</div>
</>

)}