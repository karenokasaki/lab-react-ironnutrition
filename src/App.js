import React from 'react';
import { useState, useEffect, usePreviuos } from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'

import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';




function App() {

  const [search, setSearch] = useState('') //o que esta´escrito na barra de pesquisa
  const [form, setForm] = useState()
  const [foodList, setFoodList] = useState([])


  

  return (
    <div className="App">

      <h1 className="title">IronNutrition</h1>

      <Search
        search={search}
        setSearch={setSearch}
      />

      <div className='columns'>
        <FoodBox
          foods={
            foods
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


