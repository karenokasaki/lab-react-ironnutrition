import React from 'react';
import { useState } from 'react'

import 'bulma/css/bulma.css'
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';
import AddNewFood from './components/AddNewFood'




function App() {
  const [bd, setBd] = useState(foods)
  const [search, setSearch] = useState('') //o que esta´escrito na barra de pesquisa
  const [form, setForm] = useState()
  const [foodList, setFoodList] = useState([])


  console.log(bd, foods)

  return (
    <div className="App">
      <nav>
        <h1 className="title navbar">IronNutrition</h1>
      </nav>
      <button className='button'>Add Food</button>

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

export default App;


