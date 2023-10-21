import React, { useState, useEffect } from 'react';
import Notfound from './Notfound.js';
import Recipe from './Recipe.js';

const Search = () => {
  const [input, setInput] = useState('');
  const [meals, setMeal] = useState([]);
  const [details, setDetails] = useState(false);
  const [selectMeal, setSelectMeal] = useState(null);

  const handle = (meal) => {
    setSelectMeal(meal);
  };

  const find = (e) => {
    setInput(e.target.value);
  };

  const fetchMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals);
        setDetails(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (details) {
      fetchMeals();
    }
  }, [details]);
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(input=== ""){
      alert("Please enter the food name")
    }
    else{
      fetchMeals()
    }


  }

  return (
    <><div className='full'>
      <h1 className= "form">Food Information</h1>
      <p className= "form">"Good food is the foundation of genuine happiness." - Auguste Escoffier</p>
      <form className= "form" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={find} placeholder="Enter food name" />
        <button className= "submit"type="submit">Submit</button>
      </form>

      <div className="container">
        {details ? (
          selectMeal ? (
            <Recipe meal={selectMeal} />
          ) : (
            meals && meals.length > 0 ? (
              meals.map((meal, index) => (
                <div key={index} className="card">
                  <img src={meal.strMealThumb} className="card-img-top" alt="mealimg" />
                  <div className="card-body">
                    <h5 className="card-title">{meal.strMeal}</h5>
                    <p className="card-text">{meal.strTags}</p>
                    <button className="btn btn-primary" onClick={() => handle(meal)}>Check Recipe</button>
                  </div>
                </div>
              ))
            ) : (
              <Notfound />
            )
          )
        ) : null}
      </div></div>
    </>
  );
};

export default Search;
