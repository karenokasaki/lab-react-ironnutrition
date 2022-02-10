import { useState, useEffect } from 'react'



function FoodBox({ foods, setForm, form, setFoodList, foodList }) {
    const [food, setFood] = useState('')
    const [qnts, setQnts] = useState('')
    const [calories, setCalories] = useState('')



    function handleQnts(event) {
        setQnts(event.target.value)
        setFood (event.target.name)
        setCalories(event.target.max * event.target.value) //calories
    }

    const handleList = e => {
        setFoodList([...foodList, [qnts, food,calories]])
    }

    
    console.log(foodList)
    return (
        <div>
            {foods.map((food) => (
                <div className="box">
                    <article className="media">
                        <div className="media-left"> 
                            <figure className="image is-64x64">
                                <img src={food.image} alt="comida" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{food.name}</strong> <br />
                                    <small>{food.calories} cal </small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input 
                                        onChange={handleQnts} 
                                        className="input" 
                                        type="number" 
                                        min='0'
                                        name={food.name}
                                        calories={food.calories}
                                        max={food.calories}
                                    />
                                </div>
                                <div className="control">
                                    <button 
                                        className="button is-info"
                                        onClick={handleList}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            ))}
        </div>
    );
}

export default FoodBox;