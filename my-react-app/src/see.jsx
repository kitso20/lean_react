import Card from "./Card.jsx";

function cd() {
  let students = [
    { name: "pi", age: 2, isNew: true },
    { name: "p2", age: 20 },
    { name: "pdj", age: 52 },
    { name: "p", age: 12, isNew: true },
    { name: "alice", age: 22, isNew: false },
    { name: "bob", age: 25 },
    { name: "charlie", age: 30, isNew: true },
    { name: "david", age: 28, isNew: true}
  ];

  return (
    <div>
    {students.map((key,value) => (
      <Card name={key.name} age={key.age} isNew={key.isNew} key={value} />
    ))}
    </div>
    );
}

export default cd;
