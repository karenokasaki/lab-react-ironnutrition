

import foods from '../../foods.json'

import FoodBox from '../../components/FoodBox'
import Search from '../../components/Search';
import TodayFoods from '../../components/TodayFoods';
import AddNewFood from '../../components/AddNewFood';
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Foods() {
    const [bd, setBd] = useState(foods)
    const [search, setSearch] = useState('') //o que esta´escrito na barra de pesquisa
    const [form, setForm] = useState()
    const [foodList, setFoodList] = useState([])

    const handleBtnAdd = (e) => {
        e.preventDefault()
        let form = document.querySelector('form')
        console.log(form)
        form.classList.add("show")
        form.classList.remove("hide")
    }

    return (
        <div>
            <Link className="button is-small" to="/">Voltar</Link>
            <h1 className="title navbar-is-center">Calories Counter</h1>


            <Search
                search={search}
                setSearch={setSearch}
                className='search'
            />

            <button onClick={handleBtnAdd} className='button is-danger'>Add Your Food</button>
            <AddNewFood bd={bd} setBd={setBd} />

            <div className='columns'>
                <TodayFoods
                    className='column'
                    foodList={foodList}
                />
                <hr/>
                <FoodBox
                    bd={
                        bd
                            .filter(food => ((food.name)).toLowerCase()
                                .includes(search.toLowerCase()))
                    }
                    className='column is-two-thirds'
                    setForm={setForm}
                    form={form}
                    setFoodList={setFoodList}
                    foodList={foodList}
                />

            </div>
        </div>


    );
}

export default Foods;