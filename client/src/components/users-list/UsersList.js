import UsersDetail from "../users-details/UsersDetails";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateUsers from '../create-users/CreateUsers';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {    
        axios.get('http://localhost:5000/api/users')
        .then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            console.error(err);
        });
    }, [reload]);

    return(
        <div className="users-list">
            {users.map((el) => <UsersDetail {...el}/>)}
            <CreateUsers reload={() => setReload(!reload)} />
        </div>
    );
}

export default UsersList;