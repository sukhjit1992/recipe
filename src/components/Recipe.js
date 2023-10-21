import React from "react"
const Recipe = ({meal}) => {



  return (
    <><div className="full1">
      <div className="duja card border-success mb-3" >
        <div className="card-header bg-transparent border-success">{meal.strTags}</div>
        <div className="card-body text-success">
          <h2 className="card-title">{meal.strArea}</h2>
          <p className="card-text">{meal.strInstructions}</p>
        </div>
        <a  href ={meal.strYoutube} className="card-footer bg-transparent border-success">{meal.strYoutube}</a>
      </div>
      </div>
    </>
  );
};

export default Recipe;
