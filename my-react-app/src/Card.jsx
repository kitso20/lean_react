import pp from "./assets/OistaY.jpg";
import Student from "./assets/student.jsx";
function Card(props) {
    return (
      <div className="card">
        <img src={pp} alt="profile pic" />
        <h2>name: {props.name}</h2>
        <p>age: {props.age}</p>
        <p>new: {props.isNew ? "yes" : 'no'}</p>
      </div>
    );
}

export default Card;