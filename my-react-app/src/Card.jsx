import pp from "./assets/OistaY.jpg";

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

/*Card.defaultProps = {
    name: "unknown",
    age: 0, 
    isNew: false
};*/

export default Card;