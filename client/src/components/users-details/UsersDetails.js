import './UsersDetails.css';

const UsersDetail = (props) => {
    return(
        <div className="users-details">
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default UsersDetail;