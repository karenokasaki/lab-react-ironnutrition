import { useState } from 'react'



function FoodBox({ bd, setFoodList, foodList }) {
    const [food, setFood] = useState()
    const [qnts, setQnts] = useState(null)
    const [calories, setCalories] = useState()

    function handleQnts(event) {
        setQnts(event.target.value)
        setFood(event.target.name)
        setCalories(event.target.max * event.target.value) //calories
    }

    function handleList(event) {
        if (qnts > 0){ //não tiver quantidade, não deixar atualizar a lista de comida
            setFoodList([...foodList, [qnts, food, calories]])
            console.log(event.target)

            //descobri como limpar o campo depois de submeter o FORM
        } else {
            return
        }
    }

   
    return (
        <div>
            {bd.map((food) => (
                <div className="box" key={food.name}>
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

            )).reverse()}
        </div>
    );
}

export default FoodBox;