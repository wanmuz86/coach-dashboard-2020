import {useState, react} from 'react';
import { useHistory } from 'react-router-dom';
export default function Login(){
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');


        const handleClick = () =>{
            // Call the API
            let data = {
                "username":username,
                "password":password,
            }
            let url = "https://coach-api-2020.herokuapp.com/api/login"
            fetch(url, {
             method: 'post',
             headers: {
               "Content-type": "application/json",
            },
             body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(data => {
             console.log('Request succeeded with JSON response', data);
             if (data.success == true){
                 let token = data.token.split(" ")[1];
                 localStorage.setItem("token",token);
                 history.push('/main')
             }
             else {
                 setErrMessage(data.message);
             }
           })
           .catch(function (error) {
             console.log('Request failed', error);
           });
    }
    return(
        <div className="container py-5">
        <h1>Login Page</h1>  {

      errMessage != '' ?
        <div className="alert alert-danger" role="alert">
            {errMessage}
            </div> :
            <span></span>
              }
    <div>
    <div class="mb-3">
                <label htmlFor="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" 
                value = {username}
                placeholder="Enter your username" 
                onChange={(e)=> {
                    setUsername(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label htmlFor="password" class="form-label">Password</label>
                <input type="password" class="form-control" 
                id="coachPassword" 
                value={password}
                placeholder="Enter your password"
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                />
                 <button className="btn btn-primary mt-3" onClick={handleClick}>Login</button>
            </div>
    </div>
    </div>
    );
}