
//atualizar quando o botão "+" for acionado. 
import '../pages/Foods/Foods.css'
function TodayFoods({ foodList }) {


  // foodList = [qnts, name, calories]
  return (
    <div className="column">
      <br />
      <h2 className="subtitle">Today's foods</h2>
      <h3>{foodList.length === 0 ? 'Add some food and lets count the calories!' : ''}</h3>
      <ul>
        {foodList.map((food) => (
          <li key={food[1]} >{food[0]} {food[1]} - {food[2]} calories</li>
        ))}
      </ul>
      <br />
      <strong>Total: {foodList.reduce((a, b) => Number(a) + Number(b[2]), 0)} calories</strong>
    </div>
  );
}

export default TodayFoods;