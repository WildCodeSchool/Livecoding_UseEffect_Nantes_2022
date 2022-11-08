import { useState } from "react";
import axios from 'axios';

const CreateUsers = (props) => {
    const [newUser, setNewUser] =useState({
        firstName: "",
        lastName: "",
        age: 0,
        email: ""
    });

    const updateUser = (field, value) => { 
        /*
        * let tmp = {...newUser} // Copy newUser
        * tmp[field] = value; // Set new value in copy
        * setNewUser(tmp); // Update new user
        */

       setNewUser({...newUser, [field]: value}); // Same but in one line
    }

    const sendNewUser = (data) => {
        axios.post('http://localhost:5000/api/users', data)
        .then(() => {
            props.reload();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return(
        <div className="create-users">
            <input  value={newUser.firstName}
                    onChange={(e) => updateUser("firstName", e.target.value)}
                    placeholder="Name"/>

            <input  value={newUser.lastName}
                    onChange={(e) => updateUser("lastName", e.target.value)}
                    placeholder="Last Name"/>

            <input  value={newUser.age}
                    type="number"
                    onChange={(e) => updateUser("age", e.target.value)}
                    placeholder="Age"/>

            <input  value={newUser.email}
                    onChange={(e) => updateUser("email", e.target.value)}
                    placeholder="Email"/>

            <button onClick={() => sendNewUser(newUser)}>SEND</button>
        </div>
    );
}

export default CreateUsers;