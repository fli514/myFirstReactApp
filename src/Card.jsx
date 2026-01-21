import profilePic from './assets/profilePic.jpg'

function Card(props){
    return (
        <div className="card">
            <img className = "card-image" alt="profile Picture" src={profilePic}></img>
            <h2>Student {props.studentId} </h2>
        </div>
    );

}

export default Card;