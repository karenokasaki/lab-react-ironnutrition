

import foods from '../../foods.json'

import FoodBox from '../../components/FoodBox'
import Search from '../../components/Search';
import TodayFoods from '../../components/TodayFoods';
import AddNewFood from '../../components/AddNewFood';
import { useState } from 'react'


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
            <nav>
                <h1 className="title navbar-is-center">IronNutrition</h1>
            </nav>
            <button onClick={handleBtnAdd} className='button'>Add Food</button>

            <AddNewFood bd={bd} setBd={setBd} />

            <Search
                search={search}
                setSearch={setSearch}
                className='search'
            />


            <div className='columns'>
                <FoodBox
                    bd={
                        bd
                            .filter(food => ((food.name)).toLowerCase()
                                .includes(search.toLowerCase()))
                    }
                    className='column'
                    setForm={setForm}
                    form={form}
                    setFoodList={setFoodList}
                    foodList={foodList}
                />
                <TodayFoods
                    className='column'
                    foodList={foodList}
                />

            </div>
        </div>


    );
}

export default Foods;