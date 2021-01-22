import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem'
export default function DashboardTable(){
    // I create a variable/state coaches
    // I create a method setCoaches to save the coaches
    // I initialize it as an Empty array
    const [coaches, setCoaches] = useState([]);
    const history = useHistory();
// When or after the component is loaded I will run this function
    useEffect(() => {
        fetch('https://coach-api-2020.herokuapp.com/api/coaches')
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
      
            // Examine the text in the response
            response.json().then(function(data) {
              console.log(data);
              setCoaches(data)
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },[])
    return (
        <div className="card">
        <div className="card-header  text-light" style={styles.bgMain}>
          The coaches
      </div>
      <div className="card-body">
          <table className="table table-striped table-bordered table-hover">
              <thead>
                  <tr>
                      <th>Coach Name</th>
                      <th>Location</th>
                      <th>Rating</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      coaches.map(val=>{
                          return (
                           <ListItem coach={val} key={val._id} 
                           buttonPress={(id)=>{history.push('/coaches/'+id)
                          }}/>
                          )
                      })
                  }          
              </tbody>
          </table>
          
      </div>
      </div>
    )
}


const styles = {
    bgMain : {
            backgroundColor: 'rgb(220,60,50)'
        
    }
}