function Food() {
    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Sushi";
  return (
    <div>
      <h2>Delicious Food</h2>
      <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
      </ul>
    </div>
  );
}

export default Food;