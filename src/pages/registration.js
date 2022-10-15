import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
 
function Register()
{
   const [id, setId] = useState("");
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8020/save",
        {
        id: id,
        fname: firstname,
        lname : lastname,
        email : email,
        username : username,
        password :password
        });
          alert("User Registation Successfully");
          setId("");
          setFname("");
          setLname("");
          setEmail("");
          setUsername("");
          setPassword("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 
            <input type="text"
             name="id"
             placeholder="id"
                    
             onChange={(event) =>
              {
                  setId(event.target.value);      
              }}
            />
 
            <input type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={(event) =>
                {
                    setFname(event.target.value);      
                }}
            />
 
            <input type="text"
            name="lastname"
            placeholder="lastname"
            onChange={(event) =>
                {
                    setLname(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="email"
            placeholder="email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);      
                }}          
            />
        <input type="text"
            name="username"
            placeholder="user name"
            onChange={(event) =>
                {
                    setUsername(event.target.value);      
                }}          
            />
 
    <input type="text"
            name="password"
            placeholder="password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />
 
            <button type="submit">Register</button>
 
    
            </form>    
 
    
        </div>
    )
}
 
export default Register;