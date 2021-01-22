import {
    useParams,
  } from "react-router-dom";
  
import {  useEffect,useState,react} from 'react';
export default function CoachDetail(){
    let { id } = useParams();
    const [coach,setCoach] = useState(null); 
    useEffect(() => {
        fetch('https://coach-api-2020.herokuapp.com/api/coaches/'+id)
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
              setCoach(data)
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },[]);

    return (
        coach ? 
        <div className="container">
        <div className="card bg-light">
            <div className="row">
           {/* This need to be inside another subcomponent */}
            <div className="col-9">
            <div className="card p-3 m-3">
                    <h2>Sessions</h2>
                    {
                        coach.sessions.map(val=>{
                            return (
                                // This need to be inside another subcomponent
                            <div className="card p-3 m-3">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={val.posterUrl} class="img-fluid"/>
                                        </div>
                                        <div className="col-8">
                                        <h3>{val.title}</h3>
                                        <p>{val.description}</p>
                                        <p>{val.address}</p>
                                        <p>RM {val.price}</p>
                                            </div>
                                    </div> 
                                </div>
                            )
                        })
                    }  
            </div> 
            </div> 
            <div className="col-3">
                      {/* This need to be inside another subcomponent */}
                <div className="card p-3 m-3 text-center">
                    <img src={coach.picUrl} className="img-fluid"></img>
                    <h2>{coach.name}</h2>
                    <p>{coach.location}</p>
                    <p>{coach.phoneNumber}</p>
                    <p>{coach.email}</p>
                    <h6>Specialities</h6>
                    <p>
                        {
                        coach.specialities.map(val=>{
                            return (
                            <span class="badge bg-danger mx-1">{val}</span>
                            )
                        })
                    }
                        </p>
                    </div> 
            </div>
            </div>
          </div>
          </div>
          : <div style={{height:500}} className="text-center py-5">
            <p> <i class="fas fa-spinner fa-spin"></i></p>
            <p>Loading</p></div>
    )
}